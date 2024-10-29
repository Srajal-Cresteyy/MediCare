package com.medicare.medicare.security.controller;

import com.medicare.medicare.security.utility.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

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
    public String login(HttpServletRequest request) {
        System.out.println("Inside Authentication");
        try {
            // Retrieve the Authorization header
            String authHeader = request.getHeader("Authorization");
            if (authHeader != null && authHeader.startsWith("Basic ")) {
                // Decode the base64 encoded credentials
                String base64Credentials = authHeader.substring("Basic ".length()).trim();
                String credentials = new String(Base64.getDecoder().decode(base64Credentials), StandardCharsets.UTF_8);
                String[] userPass = credentials.split(":", 2); // Split username and password

                String username = userPass[0];
                String password = userPass[1];

                // Authenticate the user
                var authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
                var authentication = authenticationManager.authenticate(authenticationToken);
                return jwtTokenUtil.generateToken(authentication.getName());
            } else {
                return "Missing Authorization Header";
            }
        } catch (AuthenticationException e) {
            return "Invalid credentials";
        } catch (Exception e) {
            return "Authentication failed";
        }
    }
}
