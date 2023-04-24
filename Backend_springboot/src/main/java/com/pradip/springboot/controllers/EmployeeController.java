package com.pradip.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pradip.springboot.models.Employee;
import com.pradip.springboot.repositories.EmployeeRepoInterface;

@CrossOrigin(origins="http://localhost:3001")
@RestController
@RequestMapping("/pradip/api")
public class EmployeeController {

	@Autowired
	private EmployeeRepoInterface employeeRepo;
	
	// get all employee api
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepo.findAll();
	}
	
	
	// add employee api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}
	
}
