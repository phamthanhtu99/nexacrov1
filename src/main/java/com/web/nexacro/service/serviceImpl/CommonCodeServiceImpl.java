package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.mapper.CommonCodeMapper;
import com.web.nexacro.service.CommonCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CommonCodeServiceImpl implements CommonCodeService {

    @Autowired
    CommonCodeMapper commonCodeMapper;

    @Override
    public List<Map<String, Object>> select(String groupCodes) {
        List<String> groups = new ArrayList<>();
        if (groupCodes != null) {
            for (String g : groupCodes.split(",")) {
                if (!g.trim().isEmpty()) {
                    groups.add(g.trim());
                }
            }
        }
        return commonCodeMapper.select(String.join(",", groups));
    }

    @Override
    public void checkCode(String group, String code, String label) {
        if (commonCodeMapper.exists(group, code) == 0) {
            throw new BizException(label + " is invalid.");
        }
    }
}
