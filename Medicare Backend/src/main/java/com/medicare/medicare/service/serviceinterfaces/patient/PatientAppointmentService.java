package com.medicare.medicare.service.serviceinterfaces.patient;

import com.medicare.medicare.dto.dtoclasses.frontenddtos.patientfrdtos.AppointmentRequest;

import java.util.List;

public interface PatientAppointmentService {
    public Boolean bookPatientAppointment(String patientUserName, AppointmentRequest appointmentRequest);
    public List<AppointmentRequest> getYourAppointments(String patientEmail);
}
