package com.medicare.medicare.dto.patientdashboard;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DoctorDto {
    private int staffID;
    private String staffUserName;
    private String firstName;
    private String lastName;
    private String position;
    private String staffDepartment;
    private Long contactNumber;
}
