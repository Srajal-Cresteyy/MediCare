package com.medicare.medicare.dao;

import com.medicare.medicare.model.appointment.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentDAO extends JpaRepository<Appointment, Integer> {
}
