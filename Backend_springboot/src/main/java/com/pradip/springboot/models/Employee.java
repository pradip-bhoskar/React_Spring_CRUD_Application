package com.pradip.springboot.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employees")
public class Employee {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="email_id")
	private String email_id;
	
	@Column(name="age")
	private int age;
	
	@Column(name="mobile_number")
	private long mobile_number;

	public Employee() {
		
	}
	
	public Employee(String first_name, String last_name, String email_id, int age, long mobile_number) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.age = age;
		this.mobile_number = mobile_number;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public long getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}

}
