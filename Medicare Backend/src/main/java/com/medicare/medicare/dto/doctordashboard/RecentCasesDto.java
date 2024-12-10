package com.medicare.medicare.dto.doctordashboard;

import com.medicare.medicare.utility.enums.Gender;
import com.medicare.medicare.utility.enums.Status;
import lombok.Data;
import java.time.LocalDate;

@Data
public class RecentCasesDto {
    private int patientID;
    private String firstName;
    private int staffID;
    private String lastName;
    private LocalDate dateOfAppointment;
    private Gender gender;
    private String address;
    private Long phoneNumber;
    private String email;
    private Long emergencyContact;
    private Status appointmentStatus;
}
