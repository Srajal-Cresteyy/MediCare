package com.medicare.medicare.dto.dtomappers.frontend.patientmappers;


import com.medicare.medicare.dao.PatientDAO;
import com.medicare.medicare.dao.StaffDAO;
import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.DoctorDto;
import com.medicare.medicare.dto.dtoclasses.frontenddtos.patientfrdtos.AppointmentRequest;
import com.medicare.medicare.exception.exceptions.ResourceNotFoundException;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Position;
import com.medicare.medicare.utility.enums.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AppointmentRequestMappers {
    private final StaffDAO doctorDao;
    private final PatientDAO patientDAO;


    @Autowired
    public AppointmentRequestMappers(StaffDAO doctorDao,PatientDAO patientDAO){
        this.patientDAO = patientDAO;
        this.doctorDao = doctorDao;
    }

    public Appointment appointmentDtoToEntity(Status status, String patientEmail, AppointmentRequest appointmentRequest){
        if(appointmentRequest == null) throw new ResourceNotFoundException("Appointment Request Dto Send Empty in the mapper");

        Staff doctor = doctorDao.findById(appointmentRequest.getDoctorId()).get();
        Patient patient = patientDAO.findByEmail(patientEmail);
        System.out.println("Patient for Which Appointment is Booked " + patient);
        System.out.println("Patient Email is  : "  + patientEmail);
        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentDate(appointmentRequest.getAppointmentDate());
        appointment.setAppointmentStatus(status);
        appointment.setAppointmentTime(appointmentRequest.getAppointmentTime());
        appointment.setAppointmentNotes(appointmentRequest.getAppointmentNotes());

        return appointment;
    }

    public AppointmentRequest appointmentEntityToDto(Appointment appointment){
        if(appointment == null) throw new ResourceNotFoundException("Appointment was null inside the mapper");
        AppointmentRequest appointmentRequest = new AppointmentRequest();

        appointmentRequest.setAppointmentDate(appointment.getAppointmentDate());
        appointmentRequest.setAppointmentTime(appointment.getAppointmentTime());
        appointmentRequest.setUsername(appointment.getPatient().getEmail());
        appointmentRequest.setAppointmentNotes(appointment.getAppointmentNotes());
        appointmentRequest.setDoctorId(appointment.getDoctor().getStaffID());
        appointment.setAppointmentStatus(appointment.getAppointmentStatus());

        return appointmentRequest;
    }

    public List<AppointmentRequest> appointmentEntityListToDtoList(List<Appointment> doctors) {
        if (doctors == null || doctors.isEmpty()) return List.of();

        return doctors.stream()
                .map(this::appointmentEntityToDto)
                .collect(Collectors.toList());
    }

}
