package com.medicare.medicare.dto.dtomappers.backend.doctormappers;

import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.DoctorDto;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.utility.enums.Position;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
public class DoctorDtoMappers {
    public DoctorDto doctorEntityToDto(Staff doctor){
        if(doctor == null || doctor.getPosition() != Position.DOCTOR) return new DoctorDto();
        DoctorDto doctorDto = DoctorDto.builder().build();

        doctorDto.setStaffID(doctor.getStaffID());
        doctorDto.setPosition(doctor.getPosition());
        doctorDto.setFirstName(doctor.getFirstName());
        doctorDto.setLastName(doctor.getLastName());
        doctorDto.setStaffDepartment(doctor.getStaffDepartment().getDepartment().getDepartmentName());
        doctorDto.setContactNumber(doctor.getContactNumber());
        doctorDto.setStaffUserName(doctor.getStaffUserName());

        return doctorDto;
    }

    public Staff doctorDtoToEntity(DoctorDto doctorDto){
        if(doctorDto == null || doctorDto.getPosition() != Position.DOCTOR) return new Staff();
        Staff doctor = new Staff();

        doctor.setStaffID(doctorDto.getStaffID());
        doctor.setPosition(doctorDto.getPosition());
        doctor.setFirstName(doctorDto.getFirstName());
        doctor.setLastName(doctorDto.getLastName());
        // Temporarily Until use Staff department is not being set
        doctor.setContactNumber(doctorDto.getContactNumber());
        doctor.setStaffUserName(doctorDto.getStaffUserName());

        return doctor;
    }

    // Function to map a list of Staff to a list of DoctorDto
    public List<DoctorDto> doctorEntityListToDtoList(List<Staff> doctors) {
        if (doctors == null || doctors.isEmpty()) return List.of();

        return doctors.stream()
                .filter(doctor -> doctor.getPosition() == Position.DOCTOR)
                .map(this::doctorEntityToDto)
                .collect(Collectors.toList());
    }

    // Function to map a list of DoctorDto to a list of Staff
    public List<Staff> doctorDtoListToEntityList(List<DoctorDto> doctorDtos) {
        if (doctorDtos == null || doctorDtos.isEmpty()) return List.of();

        return doctorDtos.stream()
                .filter(dto -> dto.getPosition() == Position.DOCTOR)
                .map(this::doctorDtoToEntity)
                .collect(Collectors.toList());
    }

}
