package com.web.nexacro.config;

import com.web.nexacro.controller.AuthController;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Blocks product / supplier requests without a logged in session.
 * Answers with ErrorCode -99, which the client common callback turns into
 * "session expired" and a jump back to the login screen.
 */
public class LoginInterceptor implements HandlerInterceptor {

    public static final int SESSION_EXPIRED = -99;

    private static final String RESPONSE = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
            + "<Root xmlns=\"http://www.tobesoft.com/platform/dataset\" ver=\"5000\"><Parameters>"
            + "<Parameter id=\"ErrorCode\" type=\"int\">" + SESSION_EXPIRED + "</Parameter>"
            + "<Parameter id=\"ErrorMsg\" type=\"string\">Your session has expired, please log in again.</Parameter>"
            + "</Parameters></Root>";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute(AuthController.SESSION_USER) != null) {
            return true;
        }
        // the CSV download is a browser link, not a Nexacro transaction
        if (request.getRequestURI().endsWith("/export")) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        // every other request (also GET: Nexacro sends a transaction without input as GET) gets -99
        response.setContentType("text/xml; charset=UTF-8");
        response.getWriter().write(RESPONSE);
        return false;
    }
}
