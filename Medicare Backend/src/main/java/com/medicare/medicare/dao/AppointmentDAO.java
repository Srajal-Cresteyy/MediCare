package com.medicare.medicare.dao;

import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentDAO extends JpaRepository<Appointment, Integer> {
    public List<Appointment> findByPatient(Patient patient);
}
