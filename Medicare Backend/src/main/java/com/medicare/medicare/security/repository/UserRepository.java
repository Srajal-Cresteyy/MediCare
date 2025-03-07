package com.medicare.medicare.security.repository;

import com.medicare.medicare.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserName(String username);
    Boolean existsByUserName(String userName);
}