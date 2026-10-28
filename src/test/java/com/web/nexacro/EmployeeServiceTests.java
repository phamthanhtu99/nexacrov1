package com.web.nexacro;

import com.web.nexacro.service.EmployeeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

// Runs against the configured database; @Transactional rolls every change back.
@SpringBootTest
@Transactional
class EmployeeServiceTests {

	@Autowired
	EmployeeService employeeService;

	@Test
	void crud() {
		List<Map<String, Object>> all = employeeService.select(null);
		assertTrue(all.size() >= 10);
		assertTrue(all.get(0).containsKey("EMPLOYEE_ID"), "keys must be upper case: " + all.get(0).keySet());
		assertEquals("Nguyen Van A", all.get(0).get("FULL_NAME"));
		assertEquals("20230115", all.get(0).get("HIRE_DATE"));

		Map<String, Object> cond = new HashMap<>();
		cond.put("KEYWORD", "nguyen");
		cond.put("DEPARTMENT", "IT");
		assertEquals(2, employeeService.select(cond).size());

		// Nexacro sends every value as a string, empty string for blank
		Map<String, Object> emp = new HashMap<>();
		emp.put("EMPLOYEE_CODE", "EMP999");
		emp.put("FULL_NAME", "Test User");
		emp.put("EMAIL", "test999@example.com");
		emp.put("GENDER", "M");
		emp.put("BIRTH_DATE", "19900101");
		emp.put("DEPARTMENT", "QA");
		emp.put("POSITION", "Tester");
		emp.put("SALARY", "12000000");
		emp.put("HIRE_DATE", "20250101");
		emp.put("RESIGN_DATE", "");
		assertEquals(1, employeeService.insert(emp));

		Map<String, Object> qa = new HashMap<>();
		qa.put("DEPARTMENT", "QA");
		List<Map<String, Object>> found = employeeService.select(qa);
		assertEquals(1, found.size());
		assertEquals("ACTIVE", found.get(0).get("STATUS"));
		assertEquals("19900101", found.get(0).get("BIRTH_DATE"));

		Object id = found.get(0).get("EMPLOYEE_ID");
		emp.put("EMPLOYEE_ID", String.valueOf(id));
		emp.put("FULL_NAME", "Test User Updated");
		emp.put("SALARY", "13000000");
		assertEquals(1, employeeService.update(emp));
		assertEquals("Test User Updated", employeeService.select(qa).get(0).get("FULL_NAME"));

		Map<String, Object> del = new HashMap<>();
		del.put("EMPLOYEE_ID", String.valueOf(id));
		assertEquals(1, employeeService.delete(del));
		assertTrue(employeeService.select(qa).isEmpty());
		assertEquals(0, employeeService.delete(del), "already deleted");
	}
}
