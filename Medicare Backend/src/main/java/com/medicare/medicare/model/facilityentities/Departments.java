package com.medicare.medicare.model.facilityentities;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "Departments_HMS")
@NoArgsConstructor
public class Departments {
    @Id
    @Column(name = "Department_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int departmentID;

    @Column(name = "Department_Name")
    private String departmentName;

    @Column(name = "Department_Description")
    private String departmentDescription;

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "department")
    private List<DepartmentFacilityMapping> departmentFacilityMappings;
}
