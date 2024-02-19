package com.example.demo.service.xkcd;

import com.example.demo.domain.XkcdResponse;

public interface XkcdService {

    XkcdResponse getCurrentComic();

    XkcdResponse getPastComic(String comicNum);

}