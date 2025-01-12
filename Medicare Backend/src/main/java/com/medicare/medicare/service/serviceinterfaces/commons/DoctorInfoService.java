package com.medicare.medicare.service.serviceinterfaces.commons;

import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.DoctorDto;

import java.util.List;

public interface DoctorInfoService {
    public List<DoctorDto> getDoctorsList();
}
