package com.medicare.medicare.service.impl.commons;

import com.medicare.medicare.dao.AppointmentDAO;
import com.medicare.medicare.dao.StaffDAO;
import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.RecentCasesDto;
import com.medicare.medicare.dto.dtomappers.backend.doctormappers.RecentCasesMapper;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.service.serviceinterfaces.commons.RecentCasesService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class RecentCasesImpl implements RecentCasesService {

    private final StaffDAO staffDAO;
    private final RecentCasesMapper recentCasesMapper;
    private final AppointmentDAO appointmentDAO;

    @Autowired
    public RecentCasesImpl(AppointmentDAO appointmentDAO , StaffDAO staffDAO , RecentCasesMapper recentCasesMapper) {
        this.recentCasesMapper = recentCasesMapper;
        this.staffDAO = staffDAO;
        this.appointmentDAO = appointmentDAO;
    }

    @Override
    public List<RecentCasesDto> fetchRecentPatients(String userName) {
        if (userName == null) return new ArrayList<>();
        if (userName.equalsIgnoreCase("admin@admin.com")) {

            List<Appointment> appointmentsList = appointmentDAO.findAll();
            return appointmentsList.stream()
                    .map(appointment -> {
                        Patient patient = appointment.getPatient();
                        return recentCasesMapper.mapEntityToDtoAdmin(patient, appointment);
                    })
                    .toList();
        } else {
            Staff doctor = staffDAO.findByStaffUserName(userName);

            List<Appointment> appointmentsList = doctor.getAppointments();

            return appointmentsList.stream()
                    .map(appointment -> {
                        Patient patient = appointment.getPatient();
                        return recentCasesMapper.mapEntityToDto(patient, appointment, doctor);
                    })
                    .toList();
        }
    }
}

