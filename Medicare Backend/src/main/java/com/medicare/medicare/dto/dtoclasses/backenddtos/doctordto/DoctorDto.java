package com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto;

import com.medicare.medicare.utility.enums.Position;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorDto {
    private int staffID;
    private String staffUserName;
    private String firstName;
    private String lastName;
    private Position position;
    private String staffDepartment;
    private Long contactNumber;
}
