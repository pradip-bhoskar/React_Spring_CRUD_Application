package com.pradip.springboot.controllers;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pradip.springboot.exceptions.ResourceNotFoundException;
import com.pradip.springboot.models.Employee;
import com.pradip.springboot.repositories.EmployeeRepoInterface;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/pradip/api")
public class EmployeeController {

	@Autowired
	private EmployeeRepoInterface employeeRepo;

	// get all employee api
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepo.findAll();
	}

	// add employee api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}

	// get employee by id employee api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
		return ResponseEntity.ok(emp);
	}

	// update employee api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {

		Employee emp = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found"));

		emp.setFirst_name(employee.getFirst_name());
		emp.setLast_name(employee.getLast_name());
		emp.setEmail_id(employee.getEmail_id());
		emp.setAge(employee.getAge());
		emp.setMobile_number(employee.getMobile_number());

		Employee updateEmp = employeeRepo.save(emp);

		return ResponseEntity.ok(updateEmp);
	}

	// delete employee api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee emp = employeeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not available"));

		employeeRepo.delete(emp);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
