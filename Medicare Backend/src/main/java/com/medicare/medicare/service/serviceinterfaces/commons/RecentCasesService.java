package com.medicare.medicare.service.serviceinterfaces.commons;

import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.RecentCasesDto;
import java.util.List;

public interface RecentCasesService {
    public List<RecentCasesDto> fetchRecentPatients(String userName);
}
