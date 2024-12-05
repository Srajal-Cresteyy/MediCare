package com.medicare.medicare.dao;

import com.medicare.medicare.model.facilityentities.DepartmentFacilityMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentFacilityMappingDao extends JpaRepository<DepartmentFacilityMapping,Integer> {
}
