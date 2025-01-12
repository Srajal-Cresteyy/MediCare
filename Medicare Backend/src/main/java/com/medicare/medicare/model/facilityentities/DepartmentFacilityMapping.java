package com.medicare.medicare.model.facilityentities;

import com.medicare.medicare.model.financeentities.Expenses;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.model.facilityentities.Departments;
import com.medicare.medicare.model.facilityentities.Facilities;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Department_Facility_Mapping_HMS")
public class DepartmentFacilityMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private Departments department;

    @ManyToOne
    private Facilities facility;

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "staffDepartment")
    private List<Staff> departmentStaffs;

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "departmentFacilityMapping")
    private List<Expenses> expenses;
}
