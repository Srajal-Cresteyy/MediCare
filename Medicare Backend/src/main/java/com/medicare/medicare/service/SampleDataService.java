package com.medicare.medicare.service;

import com.medicare.medicare.dao.*;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Gender;
import com.medicare.medicare.utility.enums.Position;
import com.medicare.medicare.utility.enums.Status;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


// This Service is used to Insert the Demo Data inside the Database

@Service
@Transactional
public class SampleDataService {
    private final PatientDAO patientDAO;
    private final StaffDAO staffDAO;
    private final AppointmentDAO appointmentDAO;
    private final FacilityDAO facilityDAO;
    private final DepartmentDAO departmentDAO;

    @Autowired
    SampleDataService(PatientDAO patientDAO , StaffDAO staffDAO , AppointmentDAO appointmentDAO , FacilityDAO facilityDAO , DepartmentDAO departmentDAO){
        this.staffDAO = staffDAO;
        this.patientDAO = patientDAO;
        this.appointmentDAO = appointmentDAO;
        this.facilityDAO = facilityDAO;
        this.departmentDAO = departmentDAO;
    }

    @Value("${insert.sample.data:true}") // Default value is false
    private String insertSampleData;

    @PostConstruct
    public void init() {
        if (insertSampleData!=null && insertSampleData.equalsIgnoreCase("true")) {
            insertSampleData();
        }
    }

    public void insertSampleData() {
        // Create a Facility

        Staff doctor = new Staff();
        doctor.setStaffUserName("ArvindSharma");
        doctor.setFirstName("Arvind");
        doctor.setLastName("Sharma");
        doctor.setPosition(Position.DOCTOR);
        // Staff Department Mapping
        doctor.setHireDate(LocalDate.now());
        doctor.setContactNumber(9876543210L);
        // Vaccinations Administered
        // Appointment Mapping
        staffDAO.save(doctor);

        Patient patient = new Patient();
        patient.setFirstName("Srajal");
        patient.setLastName("Dwivedi");
        patient.setDateOfBirth(LocalDate.of(2001,11,19));
        patient.setGender(Gender.MALE);
        patient.setAddress("Pune, Maharashtra");
        patient.setPhoneNumber(9876543210L);
        patient.setEmail("srajaldwivedi@email.com");
        patient.setEmergencyContact(1234567890L);
        patientDAO.save(patient);

        // Setting Appointment Object
        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentDate(LocalDate.now());
        appointment.setAppointmentTime("19:50");
        appointment.setAppointmentStatus(Status.ACTIVE);
        appointment.setAppointmentNotes("This is Appointment is for Cardiac Problems !");
        appointmentDAO.save(appointment);




    }
}
