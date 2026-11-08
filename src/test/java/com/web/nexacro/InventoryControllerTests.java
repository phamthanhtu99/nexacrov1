package com.web.nexacro;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.controller.AuthController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// Sends real Nexacro XML requests through the controllers, the interceptor and the common BaseNexacroController.
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class InventoryControllerTests {

    @Autowired
    MockMvc mockMvc;

    /** Nexacro request body with a one-row dataset. */
    private static String request(String dataset, String... columnValues) {
        StringBuilder columns = new StringBuilder();
        StringBuilder values = new StringBuilder();
        for (int i = 0; i < columnValues.length; i += 2) {
            columns.append("<Column id=\"").append(columnValues[i]).append("\" type=\"STRING\" size=\"256\"/>");
            values.append("<Col id=\"").append(columnValues[i]).append("\">").append(columnValues[i + 1]).append("</Col>");
        }
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
                + "<Root xmlns=\"http://www.tobesoft.com/platform/dataset\" ver=\"5000\">"
                + "<Dataset id=\"" + dataset + "\"><ColumnInfo>" + columns + "</ColumnInfo>"
                + "<Rows><Row>" + values + "</Row></Rows></Dataset></Root>";
    }

    private static NexacroUtils data(MvcResult result) {
        return (NexacroUtils) result.getModelAndView().getModel().get("data");
    }

    private static MockHttpSession loggedIn() {
        MockHttpSession session = new MockHttpSession();
        Map<String, Object> user = new HashMap<>();
        user.put("USER_ID", 1L);
        user.put("USER_NAME", "Tester");
        session.setAttribute(AuthController.SESSION_USER, user);
        return session;
    }

    @Test
    void productListNeedsLogin() throws Exception {
        String body = mockMvc.perform(post("/product/list").contentType("text/xml").content(request("ds_cond", "PAGE", "1")))
                .andReturn().getResponse().getContentAsString();
        assertTrue(body.contains("<Parameter id=\"ErrorCode\" type=\"int\">-99</Parameter>"), body);

        mockMvc.perform(get("/product/export")).andExpect(status().isUnauthorized());

        // a Nexacro transaction without input is sent as GET and must also get -99
        String getBody = mockMvc.perform(get("/product/summary")).andReturn().getResponse().getContentAsString();
        assertTrue(getBody.contains(">-99<"), getBody);
    }

    @Test
    void productListReturnsOnePage() throws Exception {
        MvcResult result = mockMvc.perform(post("/product/list").session(loggedIn()).contentType("text/xml")
                .content(request("ds_cond", "PAGE", "2", "PAGE_SIZE", "5"))).andReturn();
        NexacroUtils data = data(result);
        assertEquals(0, data.getCode(), data.getMessage());
        assertEquals("ds_product", data.getDataSets().get(0).getId());
        assertEquals(5, data.getDataSets().get(0).getRows().size());
        assertEquals("ds_page", data.getDataSets().get(1).getId());
    }

    @Test
    void validationErrorBecomesErrorMessage() throws Exception {
        MvcResult result = mockMvc.perform(post("/auth/signup").contentType("text/xml")
                .content(request("ds_user", "USER_NAME", "A", "EMAIL", "not-an-email", "PASSWORD", "12345678",
                        "CONFIRM_PASSWORD", "12345678"))).andReturn();
        assertEquals(-2, data(result).getCode());
        assertEquals("Email is invalid.", data(result).getMessage());
    }

    @Test
    void loginStartsSession() throws Exception {
        mockMvc.perform(post("/auth/signup").contentType("text/xml").content(request("ds_user", "USER_NAME", "Ctrl Test",
                "EMAIL", "ctrl.test@example.com", "PASSWORD", "password1", "CONFIRM_PASSWORD", "password1")));

        MvcResult login = mockMvc.perform(post("/auth/login").contentType("text/xml")
                .content(request("ds_login", "EMAIL", "ctrl.test@example.com", "PASSWORD", "password1", "REMEMBER", "N"))).andReturn();
        assertEquals(0, data(login).getCode(), data(login).getMessage());
        assertEquals("Ctrl Test", data(login).getDataSets().get(0).getRows().get(0).get("USER_NAME"));

        MockHttpSession session = (MockHttpSession) login.getRequest().getSession(false);
        MvcResult codes = mockMvc.perform(post("/supplier/list").session(session).contentType("text/xml")
                .content(request("ds_cond", "RETURN_TYPE", "TAKING"))).andReturn();
        assertEquals(0, data(codes).getCode(), data(codes).getMessage());
    }

    @Test
    void exportCsv() throws Exception {
        String csv = mockMvc.perform(get("/product/export").param("AVAILABILITY", "OUT").session(loggedIn()))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
        assertTrue(csv.startsWith("﻿PRODUCT_CODE,PRODUCT_NAME"), csv);
        assertTrue(csv.contains("P-1002,Bru"), csv);
    }
}
