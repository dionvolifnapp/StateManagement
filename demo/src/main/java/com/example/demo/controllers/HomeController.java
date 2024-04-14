package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    //  @GetMapping(value = {"/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
    @GetMapping(value = {"/", "/currentxkcdcomic", "/pastxkcdcomic", "/example","/nasa-apod", "/nasa-apod2","/weather-dashboard"})
    public String index(){
        return "index";
    }
}
