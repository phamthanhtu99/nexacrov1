# Kanban Inventory Management (Nexacro N + Spring Boot)

Web inventory system for Nexacro trainees: login / sign up, product inventory, product detail, suppliers.

| Layer | Technology |
|---|---|
| UI | Nexacro N 24 (project `src/main/webapp/EduSysN24`, generated files in `src/main/webapp`) |
| Server | Spring Boot 2.7 (WAR), MyBatis annotation mappers, Nexacro X-API |
| Database | PostgreSQL (`src/main/resources/db/inventory.sql`) |

## Screens

| # | Screen | Form | Server calls |
|---|---|---|---|
| 1 | Login | `Base::Form_Login.xfdl` | `auth/login`, `auth/tokenLogin` |
| 2 | Sign up | `Base::Form_Register.xfdl` | `auth/signup` |
| 3 | Inventory list | `Base::Form_Inventory.xfdl` | `product/summary`, `product/list`, `product/export` |
| 4 | Add new product (popup) | `Base::Form_NewProduct.xfdl` | `product/insert` |
| 5 | Product info | `Base::Form_ProductInfo.xfdl` | `product/detail` |
| 6 | Suppliers list | `Base::Form_Suppliers.xfdl` | `supplier/list` |
| 7 | Add new supplier (popup) | `Base::Form_NewSupplier.xfdl` | `supplier/insert` |

After login, `Form_Layout` holds three Divs: `Form_Menu` (left), `Form_Header` (top, search box) and the content.
Clicking a menu item only changes the content Div; Inventory and Suppliers are built, the other menu items show
`Form_Placeholder`. Clicking a product row opens Product Info in the same content Div.

## Database

Run `src/main/resources/db/inventory.sql` once (it drops and recreates the inventory tables, the `employee` table is not touched).

| Table | Purpose |
|---|---|
| `common_code` | Code groups: `CATEGORY`, `AVAILABILITY`, `RETURN_TYPE`, `MOVEMENT_TYPE`, `LOCATION` |
| `app_user` | Users, password stored as PBKDF2 hash, unique email (case-insensitive index) |
| `user_token` | Login tokens; 30 days with "Remember for 30 days", 1 day otherwise |
| `product` | Products (`product_code` is the "Product ID" on screen) |
| `product_stock` | Stock per location (Product Info → Stock locations) |
| `stock_movement` | Purchases, adjustments, sales (Product Info → Purchases / Adjustments / History tabs) |
| `supplier` | Suppliers; a supplier is linked to the product with the same name |

Availability is not stored, it is computed: `OUT` when quantity = 0, `LOW` when quantity ≤ threshold, otherwise `IN`.

## API (all `POST`, Nexacro XML in/out, `ErrorCode` / `ErrorMsg` parameters)

| URL | In | Out |
|---|---|---|
| `/auth/signup` | `ds_user` (USER_NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD) | – |
| `/auth/login` | `ds_login` (EMAIL, PASSWORD, REMEMBER Y/N) | `ds_user` (USER_ID, USER_NAME, EMAIL, TOKEN) |
| `/auth/tokenLogin` | `ds_login` (TOKEN) | `ds_user` |
| `/auth/logout` | `ds_login` (TOKEN) | – |
| `/common/code` | `ds_cond` (GROUP_CODES, comma separated) | `ds_code` (GROUP, GROUP_NAME, CODE, CODE_NAME) |
| `/product/list` | `ds_cond` (KEYWORD, CATEGORY, AVAILABILITY, PAGE, PAGE_SIZE) | `ds_product`, `ds_page` (TOTAL_COUNT) |
| `/product/summary` | – | `ds_summary` |
| `/product/detail` | `ds_cond` (PRODUCT_ID) | `ds_product`, `ds_stock`, `ds_movement` |
| `/product/insert` | `ds_product` | `ds_result` (PRODUCT_ID) |
| `/product/export` (GET) | KEYWORD, CATEGORY, AVAILABILITY | CSV file |
| `/supplier/list` | `ds_cond` (KEYWORD, CATEGORY, RETURN_TYPE) | `ds_supplier` |
| `/supplier/insert` | `ds_supplier` | `ds_result` (SUPPLIER_ID) |
| `/file/upload` (multipart, FileUpTransfer) | image file, PNG/JPG/GIF up to 5 MB | `ds_file` (FILE_PATH = `file/<uuid>.png`) |
| `/file/<uuid>.png` (GET) | – | the image, cached 30 days |

`/product/**`, `/supplier/**` and `/file/upload` need a logged in session (`LoginInterceptor`); without it the answer is `ErrorCode = -99`
and the client goes back to the login screen.

## Common functions

### Client (EduJS `gfn_*`, written the same way as `Form/Form_ScriptSample1.xfdl`)

The screens call the EduJS common functions (`EduSysN24/_extlib_/EduJS`, loaded for every form):

| Area | Function | How the screens use it |
|---|---|---|
| Transaction | `gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack)` | `sURL` uses the service prefix `KanbanUrl::` (`typedefinition.xml`); in a browser the app sets it to the page server, Nexacro Runtime keeps `http://localhost:8080/` |
| | `gfn_callback` | Common callback; `-1` → "server error" alert, `-99` (session expired) → message, then the login screen (`gfn_sessionCallback`) |
| Common code | `gfn_getCommonCode(arrCode, this.ds_code)` | Each form reads its code groups from `common/code` into `ds_code`, then fills its combos (`first:"2::All"`) |
| Validation | `gfn_clearValidation`, `gfn_setValidation`, `gfn_validation(ds, "A")` | Rules `required, isemail, digits, minlength:n, equalto:COL, date` on the bound dataset; focuses the wrong field |
| Messages | `gfn_alert(msgId, args, popupId, callback)` | Message popup (`Comm_Alert` / `Comm_Confirm`); server messages use `msg.err.validator` ("{0}") |
| Utilities | `gfn_isNull`, `gfn_nvl`, `gfn_appendComma`, `gfn_getApplication` | Checks and number format |

Form level functions follow the sample too: `fn_callback(svcId, errCd, errMsg)`, popups with
`new ChildFrame(...).showModal(..., "fn_callbackPopup")`, `fn_gridSort` (Suppliers), `fn_setPaging` (Inventory),
`fn_uploadImage` with a `FileUpTransfer` object (popups). The messages used by the screens are in English in `MSG_TEXT`.

### Server (`src/main/java/com/web/nexacro`)

| Class | What it does |
|---|---|
| `controller/BaseNexacroController` | Common transaction: read datasets, run, map `BizException` to `ErrorMsg`, render `nexacroView` |
| `Utils/ValidationUtils` | Common server validation (required, email, digits, phone, date, length) |
| `service/CommonCodeService` | Read codes, check that a code is valid |
| `Utils/PasswordUtils` | PBKDF2 password hash and login tokens |
| `config/LoginInterceptor` | Session check for product / supplier APIs |
| `Utils/NexacroUtils` | Request datasets → map, result list → Nexacro dataset with INT / DECIMAL / STRING column types |

## Cache levels

| What | Where | Level |
|---|---|---|
| Forms (`Base`, `FrameBase`), libraries (`Lib`), images, theme | `typedefinition.xml` services | `session`: downloaded once per session |
| API calls (`JSP` services) | `typedefinition.xml` | `none`: never cached |
| Common codes | `common/code` → `ds_code` of each form | Loaded when the form opens (only the groups it needs) |
| Remember-me token | Nexacro private profile (browser storage) | 30 days |

## Performance

- Inventory is paged on the server (`LIMIT/OFFSET` + count query) instead of loading every product.
- Images are files on the server (`app.upload-dir`, default `~/kanban-uploads`); the database keeps only the path and the browser caches the image.
- Indexes on category, lower(product_name), lower(email), movement (product, date).
- Header search waits 300 ms after the last key before calling the server.
- Server business errors use ErrorCode `-2`, so `gfn_callback` does not add a second "server error" alert.
- Server business errors use ErrorCode  so  does not add a second "server error" alert.
- Product Info loads everything for the four tabs in one transaction and filters on the client.
- Supplier sorting runs on the client (`keystring`), no extra server call.
- Dataset loops use `set_enableevent(false)` so the grid redraws once.
- Hikari pool is capped at 3 connections (Aiven free plan allows 15 in total).

## Unit tests

```
mvnw test
```

| Test | Covers |
|---|---|
| `UtilsTests` | Validation rules, password hashing (no database) |
| `InventoryServiceTests` | Codes, sign up / login / token, paging and filters, insert product + detail, suppliers |
| `FileControllerTests` | Image upload: stored path, fake / too large files rejected, login needed, safe file names |
| `InventoryControllerTests` | Real Nexacro XML requests: session check (-99), paging response, error messages, login session, CSV export |

The service and controller tests run against the configured database and roll back every change.

## Run and deploy

1. Create the tables: run `src/main/resources/db/inventory.sql` on the database.
2. Local run: start `NexacroApplication`, open `http://localhost:8080/index.html`.
3. After changing a form in Nexacro Studio, run **Generate** so the files in `src/main/webapp` are updated.
4. Package: `mvnw package -DskipTests` → `target/nexacro-0.0.1-SNAPSHOT.war`
   (the Studio source folder `EduSysN24/` is left out of the WAR).
5. Deploy to Tomcat 9 (javax servlet): copy the WAR to `webapps/ROOT.war` and start Tomcat.
   `java -jar` does not work with this WAR because `WEB-INF/lib` contains the Nexacro license XML.

The database password should come from an environment variable (`spring.datasource.password=${DB_PASSWORD}`)
instead of being written in `application.properties`.
