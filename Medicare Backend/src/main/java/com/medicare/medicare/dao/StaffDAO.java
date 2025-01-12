package com.medicare.medicare.dao;

import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffDAO extends JpaRepository<Staff, Integer> {
    public Staff findByStaffUserName(String userName);
    public List<Staff> findByPosition(Position position);
}

