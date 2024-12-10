package com.medicare.medicare.security.service;

import com.medicare.medicare.security.utility.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SessionService {

    private final JwtTokenUtil jwtTokenUtil;

    // Store token issuance data (could be replaced with Redis or a database)
    private final Map<String, Boolean> sessionStore = new ConcurrentHashMap<>();

    @Autowired
    public SessionService(JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public void registerSession(String token) {
        String username = jwtTokenUtil.getUsernameFromToken(token);
        sessionStore.put(username, true);
    }

    public void invalidateSession(String token) {
        String username = jwtTokenUtil.getUsernameFromToken(token);
        sessionStore.put(username, false);
    }

    public boolean isSessionValid(String token) {
        String username = jwtTokenUtil.getUsernameFromToken(token);
        return sessionStore.getOrDefault(username, false);
    }
}
