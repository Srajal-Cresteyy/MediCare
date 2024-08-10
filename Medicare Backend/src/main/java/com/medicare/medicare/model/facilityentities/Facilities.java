package com.medicare.medicare.model.facilityentities;

import com.medicare.medicare.model.patiententities.DepartmentFacilityMapping;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Hospital_Facilities")
public class Facilities {
    @Id
    @Column(name = "Facility_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int facilityID;

    @Column(name = "Facility_Name")
    private String facilityName;

    @Column(name = "Facility_Address")
    private String facilityAddress;

    @Column(name = "Contact_Number")
    private Long facilityContactNumber;

    @Column(name = "Email")
    private String facilityEmail;

    @OneToMany
    List<DepartmentFacilityMapping> departments;
}
