package com.medicare.medicare.service;

import com.medicare.medicare.dto.doctordashboard.RecentCasesDto;
import java.util.List;

public interface RecentCasesService {
    public List<RecentCasesDto> fetchRecentPatients(String userName);
}
