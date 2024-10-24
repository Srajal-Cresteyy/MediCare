package com.medicare.medicare.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/getTestData")
    public ResponseEntity<Map<String, String>> sendTestData() {
        // Creating a Map to hold key-value data
        Map<String, String> responseData = new HashMap<>();
        responseData.put("message", "Hello, this is test data!");
        responseData.put("status", "success");

        // Returning the response with the map and HTTP status OK
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
