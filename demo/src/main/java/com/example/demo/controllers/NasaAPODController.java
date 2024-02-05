package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/nasa-apod")
public class NasaAPODController {

    private static final String NASA_APOD_BASE_URL = "https://api.nasa.gov/planetary/apod";
    private static final String API_KEY = "J5CzXOafLHpF9vfhFIgtbZBmdVi1GckiX8n7nGqu";

    @GetMapping("/picture")
    public String getNasaAPODPicture(
            @RequestParam(required = false) String date,
            @RequestParam(required = false) String start_date,
            @RequestParam(required = false) String end_date,
            @RequestParam(required = false) Integer count,
            @RequestParam(required = false) Boolean thumbs
    ) {
        // Create a RestTemplate instance
        RestTemplate restTemplate = new RestTemplate();

        // Build the URL with query parameters
        StringBuilder apiUrl = new StringBuilder(NASA_APOD_BASE_URL);
        apiUrl.append("?api_key=").append(API_KEY);

        if (date != null) {
            apiUrl.append("&date=").append(date);
        }
        if (start_date != null) {
            apiUrl.append("&start_date=").append(start_date);
        }
        if (end_date != null) {
            apiUrl.append("&end_date=").append(end_date);
        }
        if (count != null) {
            apiUrl.append("&count=").append(count);
        }
        if (thumbs != null) {
            apiUrl.append("&thumbs=").append(thumbs);
        }

        // Make an HTTP GET request to the NASA APOD API
        String response = restTemplate.getForObject(apiUrl.toString(), String.class);

        return response;
    }
}
