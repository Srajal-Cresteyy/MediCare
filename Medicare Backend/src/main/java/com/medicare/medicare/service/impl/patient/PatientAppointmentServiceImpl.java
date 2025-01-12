package com.medicare.medicare.service.impl.patient;

import com.medicare.medicare.dao.AppointmentDAO;
import com.medicare.medicare.dao.PatientDAO;
import com.medicare.medicare.dto.dtoclasses.frontenddtos.patientfrdtos.AppointmentRequest;
import com.medicare.medicare.dto.dtomappers.frontend.patientmappers.AppointmentRequestMappers;
import com.medicare.medicare.model.appointment.Appointment;
import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.service.serviceinterfaces.patient.PatientAppointmentService;
import com.medicare.medicare.utility.enums.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientAppointmentServiceImpl implements PatientAppointmentService {

    private final AppointmentDAO appointmentDAO;

    private final AppointmentRequestMappers appointmentRequestMappers;

    private final PatientDAO patientDAO;

    @Autowired
    public PatientAppointmentServiceImpl(PatientDAO patientDAO ,AppointmentDAO appointmentDAO,AppointmentRequestMappers appointmentRequestMappers){
        this.appointmentDAO = appointmentDAO;
        this.appointmentRequestMappers = appointmentRequestMappers;
        this.patientDAO = patientDAO;
    }

    @Override
    public Boolean bookPatientAppointment(String patientUserName, AppointmentRequest appointmentRequest) {

        try {
            Appointment appointment = appointmentRequestMappers.appointmentDtoToEntity(Status.ACTIVE , patientUserName , appointmentRequest);
            Integer appointmentID = appointmentDAO.save(appointment).getAppointmentID();

            if(appointmentID == null) throw new Exception("Appointment Request Failed At Dao");
            return true;
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public List<AppointmentRequest> getYourAppointments(String patientEmail){
        Patient patient = patientDAO.findByEmail(patientEmail);
        List<Appointment> appointments = appointmentDAO.findByPatient(patient);
        return appointmentRequestMappers.appointmentEntityListToDtoList(appointments);
    }
}
