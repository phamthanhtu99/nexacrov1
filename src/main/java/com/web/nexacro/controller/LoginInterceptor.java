package com.web.nexacro.controller;

import com.web.nexacro.Utils.SessionUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class LoginInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String requestURI = request.getRequestURI();

        if (!requestURI.startsWith("/tl") && !requestURI.startsWith("/pm") && !requestURI.startsWith("/mb") ) {
            return true;
        }

        Map<String,Object> userInfo = (Map<String, Object>) SessionUtils.getSession("USERINFO");
        if (userInfo == null){
            response.sendRedirect("/login");
            return false;
        }
        //check role
        String role = (String) userInfo.get("USER_RL");
        if (requestURI.startsWith("/"+role) ){
            return true;
        }

        response.sendRedirect("/login");
        return false;
    }
}

