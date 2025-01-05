package com.medicare.medicare.controller;

import com.medicare.medicare.dto.doctordashboard.RecentCasesDto;
import com.medicare.medicare.service.RecentCasesService;
import org.springframework.aop.scope.ScopedProxyUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<?> getDoctorRecentCases() {
        try {
            // Get the logged-in doctor's username
            String loggedInDoctorUsername = SecurityContextHolder.getContext().getAuthentication().getName();

            // Retrieve recent appointments and extract patients
            List<RecentCasesDto> patients = recentCasesService.fetchRecentPatients(loggedInDoctorUsername);

            if (patients.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No recent cases found for the logged-in doctor.");
            }

            return ResponseEntity.ok(patients);

        } catch (Exception e) {
            // Log the exception for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching recent cases.");
        }
    }
}
