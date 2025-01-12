package com.medicare.medicare.model.facilityentities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Hospital_Facilities_HMS")
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

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "facility")
    List<DepartmentFacilityMapping> departments;
}
