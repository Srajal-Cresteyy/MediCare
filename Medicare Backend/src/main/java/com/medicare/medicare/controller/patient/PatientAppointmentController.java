package com.medicare.medicare.controller.patient;


import com.medicare.medicare.dto.dtoclasses.frontenddtos.patientfrdtos.AppointmentRequest;
import com.medicare.medicare.exception.exceptions.ResourceNotFoundException;
import com.medicare.medicare.service.serviceinterfaces.patient.PatientAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patientsApi")
public class PatientAppointmentController {

    private final PatientAppointmentService patientAppointmentService;

    @Autowired
    public PatientAppointmentController(PatientAppointmentService patientAppointmentService){
        this.patientAppointmentService = patientAppointmentService;
    }

    @PostMapping("/bookAppointment")
    public ResponseEntity<String> bookAppointentsController(@RequestBody(required = false) AppointmentRequest appointmentRequest){
        if(appointmentRequest == null) return ResponseEntity.internalServerError().body("Empty Appointment Request");
        String loggedInPatientUsername = SecurityContextHolder.getContext().getAuthentication().getName();


        boolean appointmentBooked = patientAppointmentService.bookPatientAppointment(loggedInPatientUsername,appointmentRequest);

        if(appointmentBooked) return ResponseEntity.ok("AppointmentBooked SuccessFully");
        return ResponseEntity.internalServerError().body("Appoint Couldn't be booked");
    }

    @GetMapping("/myAppointments")
    public ResponseEntity<List<AppointmentRequest>> yourAppointments(){
        String loggedInPatientUsername = SecurityContextHolder.getContext().getAuthentication().getName();

        List<AppointmentRequest> appointmentRequests = patientAppointmentService.getYourAppointments(loggedInPatientUsername);

        if(appointmentRequests.isEmpty()) throw new ResourceNotFoundException("No Appointments Present");
        return ResponseEntity.ok(appointmentRequests);
    }

}
