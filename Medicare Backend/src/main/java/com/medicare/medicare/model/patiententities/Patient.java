package com.medicare.medicare.model.patiententities;

import com.medicare.medicare.model.labentities.LabTest;
import com.medicare.medicare.model.vaccinationentities.Vaccination;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.utility.enums.Gender;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

// Master Table : For holding the records of all the patients
@Data
@NoArgsConstructor
@Entity
@Table(name = "Patient")
public class Patient {
    @Id
    @Column(name = "Patient_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int patientID;

    @Column(name = "First_Name")
    private String firstName;

    @Column(name = "Last_Name")
    private String lastName;

    @Column(name = "Date_Of_Birth")
    private LocalDate dateOfBirth;

    @Column(name = "Gender")
    private Gender gender;

    @Column(name = "Address")
    private String address;

    @Column(name = "Phone_Number")
    private Long phoneNumber;

    @Column(name = "Email")
    private String email;

    @Column(name = "Emergency_Contact")
    private Long emergencyContact;

    @OneToMany(cascade = CascadeType.PERSIST)
    private List<PatientHistory> patientHistories;

    @OneToMany
    private List<Vaccination> vaccinationsTaken;

    @OneToMany
    private List<Appointment> appointments;

    @OneToMany
    private List<LabTest> labTests;
}

