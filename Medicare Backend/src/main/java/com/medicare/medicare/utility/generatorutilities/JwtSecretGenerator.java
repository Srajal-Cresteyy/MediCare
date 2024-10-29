package com.medicare.medicare.utility.generatorutilities;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.security.SecureRandom;
import java.util.Base64;

public class JwtSecretGenerator {

    public void jwtTokenGenerator(){
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[64];
        random.nextBytes(bytes);
        String secret = Base64.getEncoder().encodeToString(bytes);
    }
    public static void main(String[] args) {

        Resource resource = new ClassPathResource("keystore.p12");
        System.out.println("Keystore exists: " + resource.exists());
    }
}