package com.medicare.medicare.dao;

import com.medicare.medicare.model.patiententities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientDAO extends JpaRepository<Patient, Integer> {
    public Patient findByPatientID(Integer patientId);
    public Patient findByEmail(String patientEmail);

}
