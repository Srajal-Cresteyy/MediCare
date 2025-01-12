package com.medicare.medicare.controller.commons;


import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.DoctorDto;
import com.medicare.medicare.exception.exceptions.ResourceNotFoundException;
import com.medicare.medicare.service.serviceinterfaces.commons.DoctorInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/medicareApi")
@PreAuthorize("hasRole('ROLE_USER','ROLE_ADMIN')")
public class DoctorDetailsController {

    private final DoctorInfoService doctorInfo;

    public DoctorDetailsController(DoctorInfoService doctorInfo){
        this.doctorInfo = doctorInfo;
    }

    @GetMapping("/doctorInfo")
    ResponseEntity<List<DoctorDto>> getAllTheDoctors(){
        List<DoctorDto> doctorDtos = doctorInfo.getDoctorsList();

        if (doctorDtos.isEmpty()) {
            throw new ResourceNotFoundException("No doctors found in the system.");
        }

        return ResponseEntity.ok(doctorDtos);
    }

}
