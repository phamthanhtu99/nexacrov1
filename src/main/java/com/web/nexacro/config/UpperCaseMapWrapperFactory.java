package com.web.nexacro.config;

import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.property.PropertyTokenizer;
import org.apache.ibatis.reflection.wrapper.MapWrapper;
import org.apache.ibatis.reflection.wrapper.ObjectWrapper;
import org.apache.ibatis.reflection.wrapper.ObjectWrapperFactory;
import org.mybatis.spring.boot.autoconfigure.ConfigurationCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

/**
 * PostgreSQL returns column labels in lower case, but the Nexacro forms and the
 * Java code expect upper case keys (EMPLOYEE_ID, FULL_NAME, ...) in hashmap results.
 */
@Configuration
public class UpperCaseMapWrapperFactory {

    @Bean
    public ConfigurationCustomizer upperCaseMapKeys() {
        return configuration -> configuration.setObjectWrapperFactory(new ObjectWrapperFactory() {
            @Override
            public boolean hasWrapperFor(Object object) {
                return object instanceof Map;
            }

            @Override
            public ObjectWrapper getWrapperFor(MetaObject metaObject, Object object) {
                return new MapWrapper(metaObject, (Map) object) {
                    @Override
                    public void set(PropertyTokenizer prop, Object value) {
                        if (prop.getIndex() == null && prop.getChildren() == null) {
                            super.set(new PropertyTokenizer(prop.getName().toUpperCase()), value);
                        } else {
                            super.set(prop, value);
                        }
                    }
                };
            }
        });
    }
}
