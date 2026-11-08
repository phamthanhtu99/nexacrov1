package com.web.nexacro.controller;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.Utils.NexacroUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Common transaction handling for every Nexacro endpoint:
 * read the request datasets, run the action, turn errors into ErrorCode/ErrorMsg
 * and render the nexacroView response.
 */
public abstract class BaseNexacroController {

    private static final Logger log = LoggerFactory.getLogger(BaseNexacroController.class);

    /**
     * ErrorCode of a business rule error (BizException). Not -1 because the EduJS gfn_callback
     * shows its own "server error" alert for -1; the form callback shows ErrorMsg for every code below 0.
     */
    public static final int BIZ_ERROR = -2;

    @FunctionalInterface
    protected interface Action {
        void run(Map<String, Object> in, NexacroUtils out) throws Exception;
    }

    protected ModelAndView execute(HttpServletRequest request, ModelAndView modelAndView, Action action) throws IOException {
        NexacroUtils out = new NexacroUtils();
        try {
            Map<String, Object> in = out.getParamDataSet(request);
            out.setMessOrCode(0, "OK");
            action.run(in, out);
        } catch (BizException e) {
            out.setMessOrCode(BIZ_ERROR, e.getMessage());
        } catch (Exception e) {
            log.error("Nexacro transaction failed: {}", request.getRequestURI(), e);
            out.setMessOrCode(-1, "Server error. Please try again later.");
        }
        modelAndView.addObject("data", out);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    /** First row of a request dataset, never null. */
    @SuppressWarnings("unchecked")
    protected static Map<String, Object> row(Map<String, Object> in, String dataset) {
        Object value = in.get(dataset);
        return value instanceof Map ? (Map<String, Object>) value : new HashMap<>();
    }
}
