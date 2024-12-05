package com.medicare.medicare.service.impl;

import com.medicare.medicare.dao.StaffDAO;
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

    @Autowired
    public RecentCasesImpl(StaffDAO staffDAO){
        this.staffDAO = staffDAO;
    }

    @Override
    public List<Patient> fetchRecentPatients(String userName){

        Staff doctor = staffDAO.findByStaffUserName(userName);

        List<Appointment> appointmentsList = doctor.getAppointments();

        return  appointmentsList.stream()
                .map(Appointment::getPatient)
                .collect(Collectors.toList());
    }
}
