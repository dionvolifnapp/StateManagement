package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/dog-api")
public class DogApiController {

    private static final String DOG_API_BASE_URL = "https://api.thedogapi.com/v1";
    private static final String API_KEY = "live_RsrHCV1XJ9IJKf3DTKqCaZSPtdDH1EdTASPD3JEaCA8B6Vnk4RJ2z3ZzjH3JIXAf"; // Your Dog API key

    @GetMapping("/breeds")
    public String listBreeds() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().set("x-api-key", API_KEY);
            return execution.execute(request, body);
        });

        String apiUrl = DOG_API_BASE_URL + "/breeds";
        String response = restTemplate.getForObject(apiUrl, String.class);

        // Log the response
        System.out.println("Dog API Breeds Response: " + response);

        return response;
    }

    @GetMapping("/images/search")
    public String getImagesByBreed(@RequestParam(required = false) String breed_id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().set("x-api-key", API_KEY);
            return execution.execute(request, body);
        });

        StringBuilder apiUrl = new StringBuilder(DOG_API_BASE_URL + "/images/search?");
        if (breed_id != null) {
            apiUrl.append("breed_ids=").append(breed_id);
        }

        String response = restTemplate.getForObject(apiUrl.toString(), String.class);

        // Log the response
        System.out.println("Dog API Images By Breed Response: " + response);

        return response;
    }
}

