package com.medicare.medicare.service;

import com.medicare.medicare.model.security.User;

public interface UserService {
    User findByUsername(String username);

    User saveUser(User user);
}