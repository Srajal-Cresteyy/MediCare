package com.medicare.medicare.model.appointment;


import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int appointmentID;

    @ManyToOne
    private Patient patient;

    @ManyToOne
    private Staff doctor;

    @Column(name = "Appointment_Date")
    private LocalDate appointmentDate;

    @Column(name = "Appointment_Time")
    private String appointmentTime;

    @Column(name = "Appointment_Status")
    private Status appointmentStatus;

    @Column(name = "Appointment_Notes")
    private String appointmentNotes;
}