package com.medicare.medicare.model.labentities;

import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Facility_Lab_Test")
public class LabTest {
    @Id
    @Column(name = "Test_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int testID;

    @ManyToOne
    private Patient patient;

    @Column(name = "Test_Type")
    private String testType;

    @Column(name = "Date_Of_Test")
    private LocalDate testDate;

    @Column(name = "Results")
    private String results;

    @JoinColumn(name = "Doctor_ID")
    @ManyToOne
    private Staff doctor;

    @Column(name = "Notes")
    private String labTestNotes;
}
