package com.medicare.medicare.service.impl;

import com.medicare.medicare.dao.StaffDAO;
import com.medicare.medicare.dto.doctordashboard.RecentCasesDto;
import com.medicare.medicare.dto.doctordashboard.dtomappers.RecentCasesMapper;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.service.RecentCasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class RecentCasesImpl implements RecentCasesService {

    public StaffDAO staffDAO;
    public RecentCasesMapper recentCasesMapper;

    @Autowired
    public RecentCasesImpl(StaffDAO staffDAO , RecentCasesMapper recentCasesMapper) {
        this.recentCasesMapper = recentCasesMapper;
        this.staffDAO = staffDAO;
    }

    @Override
    public List<RecentCasesDto> fetchRecentPatients(String userName){
        Staff doctor = staffDAO.findByStaffUserName(userName);

        List<Appointment> appointmentsList = doctor.getAppointments();

        return appointmentsList.stream()
                .map(appointment -> {
                    Patient patient = appointment.getPatient();
                    return recentCasesMapper.mapEntityToDto(patient, appointment, doctor);
                })
                .collect(Collectors.toList());
    }
}

