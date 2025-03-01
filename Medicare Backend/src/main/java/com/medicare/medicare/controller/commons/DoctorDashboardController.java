package com.medicare.medicare.controller.commons;

import com.medicare.medicare.dto.dtoclasses.backenddtos.doctordto.RecentCasesDto;
import com.medicare.medicare.exception.exceptions.ResourceNotFoundException;
import com.medicare.medicare.service.serviceinterfaces.commons.RecentCasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@PreAuthorize("hasRole('ROLE_DOCTOR','ROLE_ADMIN')")
public class DoctorDashboardController {

    private final RecentCasesService recentCasesService;

    @Autowired
    public DoctorDashboardController(RecentCasesService recentCasesService) {
        this.recentCasesService = recentCasesService;
    }

    @GetMapping("/recentCases")
    public ResponseEntity<List<RecentCasesDto>> getDoctorRecentCases() {
        // Get the logged-in doctor's username
        String loggedInDoctorUsername = SecurityContextHolder.getContext().getAuthentication().getName();

        System.out.println("Going to bring in the Recent Cases !");

        // Retrieve recent appointments
        List<RecentCasesDto> patients = recentCasesService.fetchRecentPatients(loggedInDoctorUsername);

        System.out.println("Recieved Patients" + patients);

        if (patients.isEmpty()) {
            throw new ResourceNotFoundException("No recent cases found for the logged-in doctor.");
        }

        return ResponseEntity.ok(patients);
    }
}
