-- ==========================================
-- KANBAN INVENTORY DATABASE SCRIPT
-- PostgreSQL
-- Re-running this script drops and recreates every inventory table
-- (the employee table from employee.sql is not touched).
-- ==========================================

DROP TABLE IF EXISTS stock_movement CASCADE;
DROP TABLE IF EXISTS product_stock CASCADE;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS supplier CASCADE;
DROP TABLE IF EXISTS user_token CASCADE;
DROP TABLE IF EXISTS app_user CASCADE;
DROP TABLE IF EXISTS common_code CASCADE;

-- ------------------------------------------
-- Common codes: categories, availability, return types, ...
-- ------------------------------------------
CREATE TABLE common_code (
    group_code   VARCHAR(30)  NOT NULL,
    group_name   VARCHAR(100) NOT NULL,
    code         VARCHAR(30)  NOT NULL,
    code_name    VARCHAR(100) NOT NULL,
    sort_order   INT          NOT NULL DEFAULT 0,
    use_yn       CHAR(1)      NOT NULL DEFAULT 'Y',
    PRIMARY KEY (group_code, code)
);

-- ------------------------------------------
-- Users and login tokens
-- ------------------------------------------
CREATE TABLE app_user (
    user_id        BIGSERIAL PRIMARY KEY,
    user_name      VARCHAR(100) NOT NULL,
    email          VARCHAR(255) NOT NULL,
    password_hash  VARCHAR(200) NOT NULL,
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_at  TIMESTAMP
);
CREATE UNIQUE INDEX ux_app_user_email ON app_user (LOWER(email));

-- "Remember for 30 days": the client keeps the token and logs in again with it
CREATE TABLE user_token (
    token        VARCHAR(64) PRIMARY KEY,
    user_id      BIGINT    NOT NULL REFERENCES app_user (user_id) ON DELETE CASCADE,
    expires_at   TIMESTAMP NOT NULL,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_user_token_user ON user_token (user_id);

-- ------------------------------------------
-- Suppliers (one supplier supplies one product, matched by product name)
-- ------------------------------------------
CREATE TABLE supplier (
    supplier_id     BIGSERIAL PRIMARY KEY,
    supplier_name   VARCHAR(100) NOT NULL,
    product_name    VARCHAR(100) NOT NULL,
    category_code   VARCHAR(30)  NOT NULL,
    buying_price    NUMERIC(15,2) NOT NULL,
    contact_number  VARCHAR(20)  NOT NULL,
    email           VARCHAR(255),
    return_type     VARCHAR(20)  NOT NULL,          -- RETURN_TYPE code
    on_the_way      INT          NOT NULL DEFAULT 0,
    image_data      TEXT,                           -- data:image/...;base64,...
    is_deleted      BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_supplier_product ON supplier (LOWER(product_name));

-- ------------------------------------------
-- Products
-- ------------------------------------------
CREATE TABLE product (
    product_id       BIGSERIAL PRIMARY KEY,
    product_code     VARCHAR(30)  NOT NULL UNIQUE,  -- "Product ID" on the screen
    product_name     VARCHAR(100) NOT NULL,
    category_code    VARCHAR(30)  NOT NULL,
    buying_price     NUMERIC(15,2) NOT NULL,
    quantity         INT          NOT NULL,
    unit             VARCHAR(20)  NOT NULL,
    expiry_date      DATE,
    threshold_value  INT          NOT NULL,
    image_data       TEXT,
    is_deleted       BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (quantity >= 0 AND threshold_value >= 0 AND buying_price >= 0)
);
CREATE INDEX idx_product_category ON product (category_code);
CREATE INDEX idx_product_name ON product (LOWER(product_name));

-- Stock per location, the sum equals product.quantity
CREATE TABLE product_stock (
    stock_id       BIGSERIAL PRIMARY KEY,
    product_id     BIGINT       NOT NULL REFERENCES product (product_id) ON DELETE CASCADE,
    location_name  VARCHAR(100) NOT NULL,
    quantity       INT          NOT NULL DEFAULT 0,
    UNIQUE (product_id, location_name)
);

-- Purchases, adjustments and sales of a product (History tab shows all of them)
CREATE TABLE stock_movement (
    movement_id    BIGSERIAL PRIMARY KEY,
    product_id     BIGINT       NOT NULL REFERENCES product (product_id) ON DELETE CASCADE,
    movement_type  VARCHAR(20)  NOT NULL,           -- MOVEMENT_TYPE code
    quantity       INT          NOT NULL,           -- negative for sales / write-offs
    unit_price     NUMERIC(15,2),
    note           VARCHAR(255),
    movement_date  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id        BIGINT REFERENCES app_user (user_id) ON DELETE SET NULL
);
CREATE INDEX idx_movement_product ON stock_movement (product_id, movement_date DESC);
CREATE INDEX idx_movement_type_date ON stock_movement (movement_type, movement_date);

-- ==========================================
-- Seed data
-- ==========================================
INSERT INTO common_code (group_code, group_name, code, code_name, sort_order) VALUES
('CATEGORY', 'Product category', 'BEVERAGE',  'Beverages',            1),
('CATEGORY', 'Product category', 'SNACK',     'Snacks',               2),
('CATEGORY', 'Product category', 'DAIRY',     'Dairy',                3),
('CATEGORY', 'Product category', 'FRESH',     'Fruits & Vegetables',  4),
('CATEGORY', 'Product category', 'HOUSEHOLD', 'Household',            5),
('CATEGORY', 'Product category', 'PERSONAL',  'Personal care',        6),
('AVAILABILITY', 'Availability', 'IN',  'In-stock',     1),
('AVAILABILITY', 'Availability', 'LOW', 'Low stock',    2),
('AVAILABILITY', 'Availability', 'OUT', 'Out of stock', 3),
('RETURN_TYPE', 'Return type', 'TAKING',     'Taking Return',     1),
('RETURN_TYPE', 'Return type', 'NOT_TAKING', 'Not Taking Return', 2),
('MOVEMENT_TYPE', 'Stock movement', 'PURCHASE',   'Purchase',   1),
('MOVEMENT_TYPE', 'Stock movement', 'ADJUSTMENT', 'Adjustment', 2),
('MOVEMENT_TYPE', 'Stock movement', 'SALE',       'Sale',       3),
('LOCATION', 'Stock location', 'MAIN',   'Main Warehouse', 1),
('LOCATION', 'Stock location', 'STORE1', 'Store - Downtown', 2),
('LOCATION', 'Stock location', 'STORE2', 'Store - Riverside', 3);

INSERT INTO supplier (supplier_name, product_name, category_code, buying_price, contact_number, email, return_type, on_the_way) VALUES
('Richard Martin', 'Kit Kat',      'SNACK',     110, '7687764556', 'richard@gmail.com',  'TAKING',     13),
('Tom Homan',      'Maaza',        'BEVERAGE',   90, '9867545368', 'tomhoman@gmail.com', 'TAKING',      0),
('Veandir',        'Dairy Milk',   'SNACK',     120, '9867545566', 'veandier@gmail.com', 'NOT_TAKING',  0),
('Charin',         'Tomato',       'FRESH',      40, '9267545457', 'charin@gmail.com',   'TAKING',     12),
('Hoffman',        'Milk Bikis',   'SNACK',      30, '9367546531', 'hoffman@gmail.com',  'TAKING',      0),
('Fainden Juke',   'Marie Gold',   'SNACK',      35, '9667545982', 'fainden@gmail.com',  'NOT_TAKING',  9),
('Martin',         'Saffola',      'HOUSEHOLD', 210, '9867545457', 'martin@gmail.com',   'TAKING',      0),
('Joe Nike',       'Good day',     'SNACK',      25, '9567545769', 'joenike@gmail.com',  'TAKING',      0),
('Dender Luke',    'Apple',        'FRESH',     150, '9667545980', 'dender@gmail.com',   'NOT_TAKING',  7),
('Asha Traders',   'Maggi',        'SNACK',     400, '9812345670', 'asha@traders.com',   'TAKING',      5),
('Blue Hill Co',   'Bru',          'BEVERAGE',  240, '9823456781', 'sales@bluehill.com', 'NOT_TAKING',  0),
('Red Energy Ltd', 'Red Bull',     'BEVERAGE',  380, '9834567892', 'order@redenergy.com','TAKING',      4),
('Clean Home',     'Harpic',       'HOUSEHOLD', 580, '9845678903', 'hello@cleanhome.com','TAKING',      0),
('Fresh Wash',     'Ariel',        'HOUSEHOLD', 390, '9856789014', 'team@freshwash.com', 'NOT_TAKING',  3),
('Cola Partners',  'Coca cola',    'BEVERAGE',  190, '9867890125', 'cola@partners.com',  'TAKING',     10);

INSERT INTO product (product_code, product_name, category_code, buying_price, quantity, unit, expiry_date, threshold_value) VALUES
('P-1001', 'Maggi',        'SNACK',      430, 43, 'Packets', '2027-12-11', 12),
('P-1002', 'Bru',          'BEVERAGE',   257,  0, 'Packets', '2027-12-21', 12),
('P-1003', 'Red Bull',     'BEVERAGE',   405, 36, 'Packets', '2027-12-05',  9),
('P-1004', 'Bourn Vita',   'BEVERAGE',   502,  0, 'Packets', '2027-12-08',  6),
('P-1005', 'Horlicks',     'BEVERAGE',   530,  5, 'Packets', '2028-01-09',  5),
('P-1006', 'Harpic',       'HOUSEHOLD',  605, 10, 'Packets', '2028-01-09',  5),
('P-1007', 'Ariel',        'HOUSEHOLD',  408,  0, 'Packets', '2027-12-15',  7),
('P-1008', 'Scotch Brite', 'HOUSEHOLD',  359, 43, 'Packets', '2028-06-06',  8),
('P-1009', 'Coca cola',    'BEVERAGE',   205,  8, 'Packets', '2027-11-11', 10),
('P-1010', 'Kit Kat',      'SNACK',      120, 64, 'Packets', '2027-09-30', 15),
('P-1011', 'Maaza',        'BEVERAGE',    95, 30, 'Bottles', '2027-05-20', 10),
('P-1012', 'Dairy Milk',   'SNACK',      130, 12, 'Packets', '2027-08-14', 12),
('P-1013', 'Tomato',       'FRESH',       45, 80, 'Kg',      '2026-11-20', 20),
('P-1014', 'Milk Bikis',   'SNACK',       35, 54, 'Packets', '2027-10-01', 10),
('P-1015', 'Marie Gold',   'SNACK',       40,  9, 'Packets', '2027-10-15', 10),
('P-1016', 'Saffola',      'HOUSEHOLD',  230, 22, 'Bottles', '2028-02-28',  6),
('P-1017', 'Good day',     'SNACK',       30, 70, 'Packets', '2027-07-07', 15),
('P-1018', 'Apple',        'FRESH',      160, 25, 'Kg',      '2026-11-30', 10),
('P-1019', 'Amul Butter',  'DAIRY',       58, 18, 'Packets', '2026-12-20', 10),
('P-1020', 'Amul Cheese',  'DAIRY',      125,  4, 'Packets', '2027-01-15',  6),
('P-1021', 'Mother Dairy', 'DAIRY',       34, 40, 'Packets', '2026-11-12', 15),
('P-1022', 'Banana',       'FRESH',       60, 35, 'Kg',      '2026-11-15', 10),
('P-1023', 'Dove Soap',    'PERSONAL',    65, 48, 'Pieces',  '2029-03-01', 12),
('P-1024', 'Colgate',      'PERSONAL',    95, 27, 'Pieces',  '2028-09-10', 10),
('P-1025', 'Dettol',       'PERSONAL',   180,  0, 'Bottles', '2028-12-31',  5),
('P-1026', 'Lays',         'SNACK',       20, 90, 'Packets', '2027-04-18', 20),
('P-1027', 'Pepsi',        'BEVERAGE',    40, 15, 'Bottles', '2027-06-30', 15),
('P-1028', 'Surf Excel',   'HOUSEHOLD',  210, 31, 'Packets', '2028-05-05',  8),
('P-1029', 'Tata Tea',     'BEVERAGE',   270, 19, 'Packets', '2028-03-15',  6),
('P-1030', 'Head Shoulders','PERSONAL',  320,  6, 'Bottles', '2028-11-11',  6);

-- every product starts with all of its stock in the main warehouse
INSERT INTO product_stock (product_id, location_name, quantity)
SELECT product_id, 'Main Warehouse', quantity FROM product;

-- move part of the stock of the first ten products to the stores
UPDATE product_stock s SET quantity = s.quantity - (p.quantity / 3)
  FROM product p WHERE p.product_id = s.product_id AND p.product_id <= 10 AND s.location_name = 'Main Warehouse';
INSERT INTO product_stock (product_id, location_name, quantity)
SELECT product_id, 'Store - Downtown', quantity / 3 FROM product WHERE product_id <= 10 AND quantity / 3 > 0;

-- opening purchase for every product, then a few sales and adjustments in the last 7 days
INSERT INTO stock_movement (product_id, movement_type, quantity, unit_price, note, movement_date)
SELECT product_id, 'PURCHASE', quantity + 20, buying_price, 'Opening stock', CURRENT_TIMESTAMP - INTERVAL '30 days'
  FROM product;
INSERT INTO stock_movement (product_id, movement_type, quantity, unit_price, note, movement_date)
SELECT product_id, 'SALE', -15, buying_price * 1.2, 'Counter sale', CURRENT_TIMESTAMP - (product_id % 7) * INTERVAL '1 day'
  FROM product WHERE product_id % 2 = 1;
INSERT INTO stock_movement (product_id, movement_type, quantity, unit_price, note, movement_date)
SELECT product_id, 'SALE', -5, buying_price * 1.2, 'Online order', CURRENT_TIMESTAMP - (product_id % 5) * INTERVAL '1 day'
  FROM product WHERE product_id % 2 = 0;
INSERT INTO stock_movement (product_id, movement_type, quantity, unit_price, note, movement_date)
SELECT product_id, 'ADJUSTMENT', -(product_id % 3) - 1, NULL, 'Damaged in storage', CURRENT_TIMESTAMP - INTERVAL '10 days'
  FROM product WHERE product_id % 4 = 0;
