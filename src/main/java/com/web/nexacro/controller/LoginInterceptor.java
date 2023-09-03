package com.web.nexacro.controller;

import com.web.nexacro.Utils.RoleEnum;
import com.web.nexacro.Utils.SessionUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.management.relation.Role;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import java.util.Properties;

public class LoginInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();

        if(requestURI.startsWith("/error")){
            response.sendRedirect("/notification/1");
            return false;
        }


        Resource resource = new ClassPathResource("/application.properties");
        Properties props = PropertiesLoaderUtils.loadProperties(resource);

        String[] allowUrl =props.getProperty("allow.url").split(",");
        boolean ChkAllowUrl = true;

        for (String url:  allowUrl ) {
            ChkAllowUrl = requestURI.startsWith(url);
            if (ChkAllowUrl){
                break;
            }
        }

       // ChkAllowUrl = Arrays.asList(allowUrl).contains(requestURI);

        if(ChkAllowUrl){
            return  true;
        }

        Map<String,Object> userInfo = (Map<String, Object>) SessionUtils.getSession("USERINFO");
        if (userInfo == null){
            response.sendRedirect("/notification/-99");
            return false;
        }
        //check role
        String role = (String) userInfo.get("ROLE_CD");


        String roleUrl = roleName(requestURI);
        if ("".equals(roleUrl)){
            response.sendRedirect("/notification/-88");
        }

        // role pm allow
        if(RoleEnum.PROJECT_MANAGER.getRole().equals(role)){
            return  true;
        }

        String[] roleAllowArray =null;
        // check permission team lead

        roleAllowArray = props.getProperty("role."+role).split(",");
        boolean ChkPermission = Arrays.asList(roleAllowArray).contains(roleUrl);

        if( ChkPermission){
           return  true;
        }else {
            response.sendRedirect("/notification/2");
            return false;
        }

    }

    //show role in url
    public String roleName(String url){
        String[] itemUrl = url.split("/");
        String role = "";
        for (String item: itemUrl ) {

             if(RoleEnum.PROJECT_MANAGER.getRole().equals(item)){
                 role = RoleEnum.PROJECT_MANAGER.getRole();
                 break;
             }else if (RoleEnum.TEAM_LEAD.getRole().equals(item)){
                 role = RoleEnum.TEAM_LEAD.getRole();
                 break;
             }else {
                 role = RoleEnum.MEMBER.getRole();
             }

        }
        return role;
    }

}



