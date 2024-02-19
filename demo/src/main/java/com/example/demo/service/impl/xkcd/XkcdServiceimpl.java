package com.example.demo.service.impl.xkcd;

import com.example.demo.domain.XkcdResponse;
import com.example.demo.service.xkcd.XkcdService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class XkcdServiceimpl implements XkcdService {
    @Override
    public XkcdResponse getCurrentComic() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/info.0.json", XkcdResponse.class);


    }

    @Override
    public XkcdResponse getPastComic(String comicNum) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/" + comicNum +"/info.0.json", XkcdResponse.class);
    }
}
