package com.web.nexacro.controller;

import com.web.nexacro.Utils.SessionUtils;
import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/auth")
public class AuthController extends BaseNexacroController {

    /** Session attribute that LoginInterceptor checks. */
    public static final String SESSION_USER = "USERINFO";
    static final int SESSION_TIMEOUT_SECONDS = 60 * 60;

    @Autowired
    AuthService authService;

    // in : ds_user (USER_NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD)
    @PostMapping("/signup")
    public ModelAndView signup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> authService.signup(row(in, "ds_user")));
    }

    // in : ds_login (EMAIL, PASSWORD, REMEMBER)
    // out: ds_user (USER_ID, USER_NAME, EMAIL, TOKEN)
    @PostMapping("/login")
    public ModelAndView login(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            Map<String, Object> user = authService.login(row(in, "ds_login"));
            startSession(request, user);
            out.setDataset("ds_user", Collections.singletonList(user));
        });
    }

    // in : ds_login (TOKEN) saved by "Remember for 30 days"
    // out: ds_user
    @PostMapping("/tokenLogin")
    public ModelAndView tokenLogin(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            Map<String, Object> user = authService.loginWithToken(ValidationUtils.text(row(in, "ds_login"), "TOKEN"));
            startSession(request, user);
            out.setDataset("ds_user", Collections.singletonList(user));
        });
    }

    // in : ds_login (TOKEN, optional)
    @PostMapping("/logout")
    public ModelAndView logout(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            authService.logout(ValidationUtils.text(row(in, "ds_login"), "TOKEN"));
            request.getSession().invalidate();
        });
    }

    private void startSession(HttpServletRequest request, Map<String, Object> user) {
        // new session id after login (prevents session fixation)
        request.getSession().invalidate();
        request.getSession(true).setMaxInactiveInterval(SESSION_TIMEOUT_SECONDS);
        Map<String, Object> sessionUser = new HashMap<>(user);
        sessionUser.remove("TOKEN");
        SessionUtils.setSessionValue(SESSION_USER, sessionUser);
    }
}
