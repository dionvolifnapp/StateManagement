package com.example.demo.controllers;

import com.example.demo.domain.XkcdResponse;
import com.example.demo.service.xkcd.XkcdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/xkcd")
public class Xkcd {

    @Autowired
    private XkcdService xkdcService;

    @GetMapping("/current")
    public XkcdResponse getComic(){
        return xkdcService.getCurrentComic();
    }

    @GetMapping("/past/{comicNum}") // /xkcd/past/2
    public XkcdResponse getComic(@PathVariable String comicNum){
        return xkdcService.getPastComic(comicNum);
    }

    @GetMapping("/pastOpt") // /xkcd/past/2
    public XkcdResponse getComicOptional(@RequestParam("comicNum") String comicNum){
        return xkdcService.getPastComic(comicNum);
    }

}
