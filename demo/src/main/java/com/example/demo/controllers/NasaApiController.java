package com.example.demo.controllers;

import com.example.demo.domain.NasaApiResponse;
import com.example.demo.service.nasa.NasaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NasaApiController {

    @Autowired
    private NasaService nasaService;

    @GetMapping("/singlenasaimage")
    public NasaApiResponse getsingleNasa(@RequestParam(required = false) String date,
                                         @RequestParam(required = false) String thumbs){
        return nasaService.getNasaSingle(date, thumbs);
    }

    @GetMapping("/numbernasaimage")
    public NasaApiResponse[] getNumNasaMulti(@RequestParam() String count,
                                             @RequestParam(required = false) String thumbs){
        return nasaService.getNumNasaMulti(count, thumbs);
    }

    @GetMapping("/multidatenasa")
    public NasaApiResponse[] getDateRangeNasaMulti(@RequestParam(required = false) String thumbs,
                                                   @RequestParam(required = false) String end_date,
                                                   @RequestParam() String start_date){
        return nasaService.getDateRangeNasaMulti(thumbs, end_date, start_date);
    }

}
