package com.medicare.medicare.service;

import com.medicare.medicare.dao.*;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.facilityentities.DepartmentFacilityMapping;
import com.medicare.medicare.model.facilityentities.Departments;
import com.medicare.medicare.model.facilityentities.Facilities;
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
import java.util.ArrayList;
import java.util.List;

// This Service is used to Insert the Demo Data inside the Database
@Service
@Transactional
public class SampleDataService {
    private final PatientDAO patientDAO;
    private final StaffDAO staffDAO;
    private final AppointmentDAO appointmentDAO;
    private final FacilityDAO facilityDAO;
    private final DepartmentDAO departmentDAO;
    private final DepartmentFacilityMappingDao departmentFacilityMappingDao;

    @Autowired
    public SampleDataService(PatientDAO patientDAO , StaffDAO staffDAO , AppointmentDAO appointmentDAO , FacilityDAO facilityDAO , DepartmentDAO departmentDAO , DepartmentFacilityMappingDao departmentFacilityMappingDao){
        this.staffDAO = staffDAO;
        this.patientDAO = patientDAO;
        this.appointmentDAO = appointmentDAO;
        this.facilityDAO = facilityDAO;
        this.departmentDAO = departmentDAO;
        this.departmentFacilityMappingDao = departmentFacilityMappingDao;
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
        doctor.setStaffUserName("arvind.sharma@medicare.com");
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

        Departments department = new Departments();
        department.setDepartmentName("Cardio Logy");
        department.setDepartmentDescription("Department for heart treatment!");
        departmentDAO.save(department);

        Facilities facility = new Facilities();
        facility.setFacilityName("Hadapsar Facility");
        facility.setFacilityAddress("Pune");
        facility.setFacilityContactNumber(9876543210L);
        facility.setFacilityEmail("hadapsarFacility@medicare.com");
        facilityDAO.save(facility);

        DepartmentFacilityMapping departmentFacilityMapping = new DepartmentFacilityMapping();
        departmentFacilityMapping.setDepartment(department);
        departmentFacilityMapping.setFacility(facility);
        List<Staff> departmentStaffs = new ArrayList<>();
        departmentStaffs.add(doctor);
        departmentFacilityMapping.setDepartmentStaffs(departmentStaffs);
        departmentFacilityMappingDao.save(departmentFacilityMapping);
        // Assigning Facility / Department to the Doctor

        doctor.setStaffDepartment(departmentFacilityMapping);
        staffDAO.save(doctor);

        System.out.println("Successfully Inserted the Sample Data !");
    }
}