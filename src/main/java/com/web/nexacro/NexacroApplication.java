package com.web.nexacro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NexacroApplication {

	/**
	 * Hikari checks a pooled connection (connection-test-query) before every use when it was idle
	 * for more than 0.5 s, which costs one round trip to the database on almost every request.
	 * Checking only after 10 s idle is enough: keepalive-time checks idle connections in the background.
	 * Hikari reads this system property once, so it must be set before the pool is created.
	 */
	static void configureConnectionCheck() {
		if (System.getProperty("com.zaxxer.hikari.aliveBypassWindowMs") == null) {
			System.setProperty("com.zaxxer.hikari.aliveBypassWindowMs", "10000");
		}
	}

	public static void main(String[] args) {
		configureConnectionCheck();
		SpringApplication.run(NexacroApplication.class, args);
	}

}
