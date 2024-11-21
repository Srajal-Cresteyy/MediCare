package com.medicare.medicare.conf;

import com.medicare.medicare.security.model.User;
import com.medicare.medicare.security.repository.UserRepository;
import com.medicare.medicare.security.service.UserServiceImpl;
import com.medicare.medicare.security.utility.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    private final UserServiceImpl userService;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    @Lazy
    public SecurityConfig(UserServiceImpl userService, JwtTokenUtil jwtTokenUtil) {
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            User user = userService.findByUsername(username);
            if (user == null) {
                throw new UsernameNotFoundException("User not found");
            }
            return org.springframework.security.core.userdetails.User
                    .withUsername(user.getUserName())
                    .password(user.getPassword())
                    .roles(user.getRole())
                    .build();
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter(jwtTokenUtil, userDetailsService());
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests.requestMatchers("/auth/login").permitAll()
                                .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CommandLineRunner initData( UserRepository userRepository) {
        boolean checkUserExists = userRepository.existsByUserName("admin@admin.com") ;
        boolean checkDoctorExists = userRepository.existsByUserName("doctor@medicare.com");
        return args -> {
            if(!checkUserExists) {
                User admin = new User();
                admin.setUserName("admin@admin.com");
                admin.setPassword("admin");
                admin.setRole("ADMIN");
                userService.saveUser(admin);
            }

            if(!checkDoctorExists) {
                User doctor = new User();
                doctor.setUserName("doctor@medicare.com");
                doctor.setPassword("doctor");
                doctor.setRole("DOCTOR");
                userService.saveUser(doctor);
            }
        };
    }
}
