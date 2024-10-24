package com.medicare.medicare.security.controller;

import com.medicare.medicare.security.model.User;
import com.medicare.medicare.security.service.UserService;
import com.medicare.medicare.security.utility.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserService userService;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        System.out.println("User : " + user);
        try {
            var authenticationToken = new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword());
            var authentication = authenticationManager.authenticate(authenticationToken);
            return jwtTokenUtil.generateToken(authentication.getName());
        } catch (AuthenticationException e) {
            System.out.println("Failed Authentication : " + e.getMessage());
            return "Invalid credentials";
        }
    }
}