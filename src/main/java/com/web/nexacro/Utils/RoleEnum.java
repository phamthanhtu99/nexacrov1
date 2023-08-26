package com.web.nexacro.Utils;

public enum RoleEnum {
    PROJECT_MANAGER("pm") ,
    TEAM_LEAD("tl"),
    MEMBER("mb");

    private String role;

    RoleEnum(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
