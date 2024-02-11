package com.example.demo.controllers;

import com.example.demo.domain.XkcdResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/xkcd")
public class Xkcd {

    @GetMapping("/current")
    public XkcdResponse getComic(){
        RestTemplate restTemplate = new RestTemplate();
        XkcdResponse resp = restTemplate.getForObject("https://xkcd.com/info.0.json", XkcdResponse.class);
        return resp;
    }

    @GetMapping("/past/{comicNum}")
    public XkcdResponse getComic(@PathVariable String comicNum){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/" + comicNum +"/info.0.json", XkcdResponse.class);
    }

    @GetMapping("/pastOpt")
    public XkcdResponse getComicOptional(@RequestParam("comicNum") String comicNum){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/" + comicNum +"/info.0.json", XkcdResponse.class);
    }



}

