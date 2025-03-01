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
                        authorizeRequests
                                .requestMatchers("/auth/login").permitAll()
                                .requestMatchers("/auth/logout").hasAnyRole("DOCTOR","ADMIN","STAFF","USER")
                                .requestMatchers("/doctor/**").hasAnyRole("DOCTOR","ADMIN")
                                .requestMatchers("/patientsApi/**").hasAnyRole("USER")
                                .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CommandLineRunner initData( UserRepository userRepository) {
        boolean checkUserExists = userRepository.existsByUserName("admin@admin.com") ;
        boolean checkDoctorSampleExists = userRepository.existsByUserName("doctor@medicare.com");
        boolean checkDoctorExists = userRepository.existsByUserName("arvind.sharma@medicare.com");
        boolean checkPatient2Exists = userRepository.existsByUserName("srajaldwivedi@gmail.com");

        return args -> {
            if(!checkUserExists) {
                User admin = new User();
                admin.setUserName("admin@admin.com");
                admin.setPassword("admin");
                admin.setRole("ADMIN");
                userService.saveUser(admin);
            }

            if(!checkDoctorSampleExists) {
                User doctorSample = new User();
                doctorSample.setUserName("doctor@medicare.com");
                doctorSample.setPassword("doctor");
                doctorSample.setRole("DOCTOR");
                userService.saveUser(doctorSample);
            }


            if(!checkDoctorExists){
                User doctor = new User();
                doctor.setUserName("arvind.sharma@medicare.com");
                doctor.setPassword("doctor");
                doctor.setRole("DOCTOR");
                userService.saveUser(doctor);

            }

            // USER Role is for Patients

            if(!checkPatient2Exists){
                User doctor = new User();
                doctor.setUserName("srajaldwivedi@gmail.com");
                doctor.setPassword("12345678");
                doctor.setRole("USER");
                userService.saveUser(doctor);
            }
        };
    }
}
