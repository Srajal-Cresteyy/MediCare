package com.medicare.medicare.model.staffentities;

import com.medicare.medicare.model.vaccinationentities.Vaccination;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.DepartmentFacilityMapping;
import com.medicare.medicare.utility.enums.Position;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "Hospital_Staff_HMS")
public class Staff {
    @Id
    @Column(name = "Staff_ID")
    private int staffID;

    @Column(name = "Staff_First_Name")
    private String firstName;

    @Column(name = "Staff_Last_Name")
    private String lastName;

    @Column
    private Position position;

    @JoinColumn(name = "Department_Staff")
    @ManyToOne
    private DepartmentFacilityMapping staffDepartment;

    @Column(name = "Hire_Date")
    private LocalDate hireDate;

    @Column
    private Long contactNumber;

    @OneToMany
    private List<Vaccination> vaccinationsAdministered;

    @OneToMany
    private List<Appointment> appointments;
}
