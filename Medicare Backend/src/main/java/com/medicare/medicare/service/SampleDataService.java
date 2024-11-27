package com.medicare.medicare.service;

import com.medicare.medicare.dao.*;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.facilityentities.Departments;
import com.medicare.medicare.model.facilityentities.Facilities;
import com.medicare.medicare.model.patiententities.DepartmentFacilityMapping;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Position;
import com.medicare.medicare.utility.enums.Status;
import com.medicare.medicare.utility.enums.Gender;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;

@Service
@Transactional
public class SampleDataService {

    @Autowired
    private PatientDAO patientDAO;

    @Autowired
    private StaffDAO staffDAO;

    @Autowired
    private AppointmentDAO appointmentDAO;

    @Autowired
    private FacilityDAO facilityDAO;

    @Autowired
    private DepartmentDAO departmentDAO;

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
        Facilities facility = new Facilities();
        facility.setFacilityName("MediCare Hospital");
        facility.setFacilityAddress("123 Health Street, Cityville");
        facility.setFacilityContactNumber(1234567890L);
        facility.setFacilityEmail("contact@medicarehospital.com");

        // Save the facility
        facility = facilityDAO.save(facility);

        // Create a Department
        Departments department = new Departments();
        department.setDepartmentName("Cardiology");
        department.setDepartmentDescription("Department for heart-related issues.");

        // Save the department
        department = departmentDAO.save(department);

        // Create DepartmentFacilityMapping for the Doctor (Staff)
        DepartmentFacilityMapping departmentFacilityMapping = new DepartmentFacilityMapping();
        departmentFacilityMapping.setDepartment(department); // Set the department
        departmentFacilityMapping.setFacility(facility); // Set the facility

        // Create Staff (Doctor)
        Staff doctor = new Staff();
        doctor.setFirstName("Dr. John");
        doctor.setLastName("Doe");
        doctor.setPosition(Position.DOCTOR);  // Assuming Position is an Enum with DOCTOR value
        doctor.setHireDate(LocalDate.of(2010, 1, 1));
        doctor.setContactNumber(9876543210L);
        doctor.setStaffDepartment(departmentFacilityMapping); // Set the DepartmentFacilityMapping

        // Save the doctor (staff)
        doctor = staffDAO.save(doctor);

        // Create a Patient
        Patient patient = new Patient();
        patient.setFirstName("Alice");
        patient.setLastName("Smith");
        patient.setDateOfBirth(LocalDate.of(1985, 5, 20));
        patient.setGender(Gender.FEMALE);
        patient.setAddress("456 Patient Avenue, Cityville");
        patient.setPhoneNumber(1122334455L);
        patient.setEmail("alice.smith@email.com");
        patient.setEmergencyContact(9988776655L);

        // Save the patient
        patient = patientDAO.save(patient);

        // Create an Appointment for the Patient
        Appointment appointment = new Appointment();
        appointment.setAppointmentDate(LocalDate.of(2024, 12, 10));
        appointment.setAppointmentTime("10:00 AM");
        appointment.setAppointmentStatus(Status.INACTIVE);
        appointment.setAppointmentNotes("Consultation for heart checkup.");
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);

        // Save the appointment
        appointmentDAO.save(appointment);

        System.out.println("Sample data has been inserted successfully!");
    }
}
