package com.medicare.medicare;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MedicareApplication {

	public static void main(String[] args) {
//		Dotenv dotenv = Dotenv.load();
		SpringApplication.run(MedicareApplication.class, args);
	}

}