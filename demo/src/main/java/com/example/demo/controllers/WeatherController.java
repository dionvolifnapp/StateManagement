package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    private static final String OPENWEATHERMAP_BASE_URL = "https://api.openweathermap.org/data/2.5";
    private static final String API_KEY = "f5de623a22205640e2080954fa168020";

    @GetMapping("/current")
    public String getCurrentWeather(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String zip,
            @RequestParam(required = false) String lat,
            @RequestParam(required = false) String lon
    ) {
        RestTemplate restTemplate = new RestTemplate();

        StringBuilder apiUrl = new StringBuilder(OPENWEATHERMAP_BASE_URL);
        apiUrl.append("/weather?appid=").append(API_KEY);

        if (city != null) {
            apiUrl.append("&q=").append(city);
        }
        if (zip != null) {
            apiUrl.append("&zip=").append(zip);
        }
        if (lat != null && lon != null) {
            apiUrl.append("&lat=").append(lat).append("&lon=").append(lon);
        }

        String response = restTemplate.getForObject(apiUrl.toString(), String.class);

        // Log the response
        System.out.println("OpenWeatherMap Current Weather API Response: " + response);

        return response;
    }

    @GetMapping("/forecast")
    public String getWeatherForecast(
            @RequestParam String lat,
            @RequestParam String lon
    ) {
        RestTemplate restTemplate = new RestTemplate();

        StringBuilder apiUrl = new StringBuilder(OPENWEATHERMAP_BASE_URL);
        apiUrl.append("/forecast?lat=").append(lat).append("&lon=").append(lon);
        apiUrl.append("&appid=").append(API_KEY);

        String response = restTemplate.getForObject(apiUrl.toString(), String.class);

        // Log the response
        System.out.println("OpenWeatherMap Forecast API Response: " + response);

        return response;
    }
}

