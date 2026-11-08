package com.web.nexacro.service;

import java.util.List;
import java.util.Map;

public interface CommonCodeService {

    /** Codes of the given groups ("CATEGORY,RETURN_TYPE"); every group when empty. */
    List<Map<String, Object>> select(String groupCodes);

    /** Throws BizException when the code is not an active code of the group. */
    void checkCode(String group, String code, String label);
}
