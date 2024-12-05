package com.medicare.medicare.service;

import com.medicare.medicare.model.patiententities.Patient;

import java.util.List;

public interface RecentCasesService {
    public List<Patient> fetchRecentPatients(String userName);
}
