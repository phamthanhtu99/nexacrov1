package com.web.nexacro;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	// deployed as a WAR (Tomcat): main() is not called, so set the pool check here
	static {
		NexacroApplication.configureConnectionCheck();
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(NexacroApplication.class);
	}

}
