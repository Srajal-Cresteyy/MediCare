package com.medicare.medicare.dto.doctordashboard.dtomappers;

import com.medicare.medicare.dto.doctordashboard.RecentCasesDto;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import org.springframework.stereotype.Component;

@Component
public class RecentCasesMapper {
    public RecentCasesDto mapEntityToDto(Patient patient, Appointment appointment , Staff doctor){
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