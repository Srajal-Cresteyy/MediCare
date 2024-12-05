package com.medicare.medicare.dao;

import com.medicare.medicare.model.staffentities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffDAO extends JpaRepository<Staff, Integer> {
    public Staff findByStaffUserName(String userName);
}

