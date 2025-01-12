package com.medicare.medicare.model.staffentities;

import com.medicare.medicare.model.vaccinationentities.Vaccination;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.facilityentities.DepartmentFacilityMapping;
import com.medicare.medicare.utility.enums.Position;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "Hospital_Staff_HMS")
public class Staff {
    @Id
    @Column(name = "Staff_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int staffID;

    @Column(name = "User_Name" , nullable = false , unique = true)
    private String staffUserName;

    @Column(name = "Staff_First_Name")
    private String firstName;

    @Column(name = "Staff_Last_Name")
    private String lastName;

    @Column
    private Position position;

    @JoinColumn(name = "Department_Staff")
    @ManyToOne(cascade = CascadeType.MERGE)
    @ToString.Exclude
    private DepartmentFacilityMapping staffDepartment;

    @Column(name = "Hire_Date")
    private LocalDate hireDate;

    @Column
    private Long contactNumber;

    @OneToMany
    @ToString.Exclude
    private List<Vaccination> vaccinationsAdministered;

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "doctor")
    @ToString.Exclude
    private List<Appointment> appointments;
}
