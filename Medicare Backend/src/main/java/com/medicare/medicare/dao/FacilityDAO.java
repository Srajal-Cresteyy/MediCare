package com.medicare.medicare.dao;

import com.medicare.medicare.model.facilityentities.Facilities;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacilityDAO extends JpaRepository<Facilities, Integer> {
}
