package com.medicare.medicare.dao;

import com.medicare.medicare.model.facilityentities.Departments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentDAO extends JpaRepository<Departments, Integer> {
}
