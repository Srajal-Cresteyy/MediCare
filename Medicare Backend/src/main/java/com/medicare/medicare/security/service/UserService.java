package com.medicare.medicare.security.service;

import com.medicare.medicare.security.model.User;

public interface UserService {
    User findByUsername(String username);
    User saveUser(User user);
}