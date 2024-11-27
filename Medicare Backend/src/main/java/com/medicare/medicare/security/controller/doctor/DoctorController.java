package com.medicare.medicare.security.controller.doctor;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @GetMapping("/data")
    @PreAuthorize("hasRole('ROLE_DOCTOR')")
    public Map<String, String> getDoctorData() {
        return Map.of(
                "message", "Welcome, Doctor!",
                "data", "Here is your secured doctor-specific data."
        );
    }
}
