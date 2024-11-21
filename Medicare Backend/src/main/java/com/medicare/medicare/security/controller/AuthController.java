package com.medicare.medicare.security.controller;

import com.medicare.medicare.security.dto.LoginRequest;
import com.medicare.medicare.security.utility.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest loginRequest) {
        Map<String, String> response = new HashMap<>();
        try {
            String username = loginRequest.getUserName();
            String password = loginRequest.getPassword();
            String role = "ROLE_" + loginRequest.getRole(); // Extract role from request

            System.out.println("User Name : " + username);
            System.out.println("User Pass : " + password);
            System.out.println("User Role : " + role);



            // Authenticate the user
            var authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
            var authentication = authenticationManager.authenticate(authenticationToken);

            // Validate the user's role
            boolean hasRequiredRole = authentication.getAuthorities()
                    .stream()
                    .anyMatch(authority -> authority.getAuthority().equals(role));

            if (!hasRequiredRole) {
                throw new RuntimeException("Unauthorized: Role mismatch");
            }

            // Generate JWT and return role
            String token = jwtTokenUtil.generateToken(authentication.getName());
            response.put("token", token);
            response.put("role", role); // Send the user's role back
            return response;
        } catch (AuthenticationException e) {
            response.put("error", "Invalid credentials");
            return response;
        } catch (Exception e) {
            response.put("error", "Authentication failed");
            return response;
        }
    }
}

