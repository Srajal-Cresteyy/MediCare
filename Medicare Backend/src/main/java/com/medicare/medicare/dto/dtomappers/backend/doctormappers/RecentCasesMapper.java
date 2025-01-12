package com.medicare.medicare.dto.dtomappers.backend.doctormappers;

import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.RecentCasesDto;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import org.springframework.aop.scope.ScopedProxyUtils;
import org.springframework.stereotype.Component;

@Component
public class RecentCasesMapper {
    public RecentCasesDto mapEntityToDto(Patient patient, Appointment appointment , Staff doctor){

        if(patient == null || appointment == null || doctor == null) throw new NullPointerException("One of the Arguments is null");

        RecentCasesDto recentCasesDto = new RecentCasesDto();
        recentCasesDto.setPatientID(patient.getPatientID());
        recentCasesDto.setFirstName(patient.getFirstName());
        recentCasesDto.setLastName(patient.getLastName());
        recentCasesDto.setStaffID(doctor.getStaffID());
        recentCasesDto.setDateOfAppointment(appointment.getAppointmentDate());
        recentCasesDto.setGender(patient.getGender());
        recentCasesDto.setAddress(patient.getAddress());
        recentCasesDto.setPhoneNumber(patient.getPhoneNumber());
        recentCasesDto.setEmergencyContact(patient.getEmergencyContact());
        recentCasesDto.setAppointmentStatus(appointment.getAppointmentStatus());
        return recentCasesDto;
    }

    // To get All the Recent Cases for Admin
    public RecentCasesDto mapEntityToDtoAdmin(Patient patient, Appointment appointment){
        if(patient == null || appointment == null ) throw new NullPointerException("One of the Arguments is null");
        Staff doctor = appointment.getDoctor();
        RecentCasesDto recentCasesDto = new RecentCasesDto();
        recentCasesDto.setPatientID(patient.getPatientID());
        recentCasesDto.setFirstName(patient.getFirstName());
        recentCasesDto.setLastName(patient.getLastName());
        recentCasesDto.setStaffID(doctor.getStaffID());
        recentCasesDto.setDateOfAppointment(appointment.getAppointmentDate());
        recentCasesDto.setGender(patient.getGender());
        recentCasesDto.setAddress(patient.getAddress());
        recentCasesDto.setPhoneNumber(patient.getPhoneNumber());
        recentCasesDto.setEmergencyContact(patient.getEmergencyContact());
        recentCasesDto.setAppointmentStatus(appointment.getAppointmentStatus());
        return recentCasesDto;
    }
}