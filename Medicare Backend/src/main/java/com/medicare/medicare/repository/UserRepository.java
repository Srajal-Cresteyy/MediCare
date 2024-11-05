package com.medicare.medicare.repository;

import com.medicare.medicare.model.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserName(String username);
    Boolean existsByUserName(String userName);
}