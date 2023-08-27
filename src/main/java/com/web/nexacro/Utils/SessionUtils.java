package com.web.nexacro.Utils;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionUtils {


    public static HttpServletRequest httpServletRequest(){
        ServletRequestAttributes  attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        return request;
    }
    public static void setmaxInactival(int time) {
        HttpSession session = httpServletRequest().getSession();
        session.setMaxInactiveInterval(time*6000);
    }

    public static Object getSession(String key) {
        HttpSession session = httpServletRequest().getSession();
        return session.getAttribute(key);
    }

    public static void setSessionValue(String key, Object value) {
        HttpSession session = httpServletRequest().getSession();

        session.setAttribute(key, value);
    }

    public static void removeSession(String key ){
        HttpSession session = httpServletRequest().getSession();
        if(key == null){
            session.invalidate();
        }else {
            session.removeAttribute(key);
        }
    }

    public static void setTimeOut(int time,HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(time);
    }
}
