package com.medicare.medicare.model.patiententities;


import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "Patient_Medical_History_HMS")
public class PatientHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Patient_History_ID")
    private int patientHistoryID;

    @ManyToOne
    @JoinColumn(name = "Patient_ID")
    private Patient patientID;

    @Column(name = "Diagnosis")
    private String diagnosis;

    @Column(name = "Treatment_Details")
    private String treatment;

    @Column(name = "Treatment_Notes")
    private String notes;

    @Column
    private LocalDate medicalDiagnosisDate;
}
