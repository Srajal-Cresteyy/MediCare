package com.medicare.medicare.dto.dtoclasses.frontenddtos.patientfrdtos;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AppointmentRequest {
    private String username;         // Patient's username
    private int doctorId;            // Doctor's ID
    private LocalDate appointmentDate;  // Appointment date (YYYY-MM-DD)
    private String appointmentTime;  // Appointment time (HH:mm)
    private String appointmentNotes; // Notes for the appointment
}
