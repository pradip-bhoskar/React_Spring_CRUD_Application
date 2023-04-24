package com.pradip.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pradip.springboot.models.Employee;

@Repository
public interface EmployeeRepoInterface extends JpaRepository <Employee,Long>{

}
