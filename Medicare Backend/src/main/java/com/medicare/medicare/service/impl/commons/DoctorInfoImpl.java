package com.medicare.medicare.service.impl.commons;

import com.medicare.medicare.dao.StaffDAO;
import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.DoctorDto;
import com.medicare.medicare.dto.dtomappers.backend.doctormappers.DoctorDtoMappers;
import com.medicare.medicare.model.staffentities.Staff;
import com.medicare.medicare.service.serviceinterfaces.commons.DoctorInfoService;
import com.medicare.medicare.utility.enums.Position;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
public class DoctorInfoImpl implements DoctorInfoService {

    private final StaffDAO doctorsDao;
    private final DoctorDtoMappers doctorDtoMappers;

    @Autowired
    public DoctorInfoImpl(StaffDAO doctorsDao , DoctorDtoMappers doctorDtoMappers){
        this.doctorsDao = doctorsDao;
        this.doctorDtoMappers = doctorDtoMappers;
    }

    @Override
    public List<DoctorDto> getDoctorsList(){
        Position position = Position.DOCTOR;
        List<Staff> staffList = doctorsDao.findByPosition(position);
        return doctorDtoMappers.doctorEntityListToDtoList(staffList);
    }
}
