package com.medicare.medicare.dao;

import com.medicare.medicare.model.staffentities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffDAO extends JpaRepository<Staff, Integer> {
}
