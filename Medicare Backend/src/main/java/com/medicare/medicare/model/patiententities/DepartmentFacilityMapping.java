package com.medicare.medicare.model.patiententities;

import com.medicare.medicare.model.financeentities.Expenses;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.model.facilityentities.Departments;
import com.medicare.medicare.model.facilityentities.Facilities;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Department_Facility_Mapping")
public class DepartmentFacilityMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private Departments department;

    @ManyToOne
    private Facilities facility;

    @OneToMany
    private List<Staff> departmentStaffs;

    @OneToMany
    private List<Expenses> expenses;
}
