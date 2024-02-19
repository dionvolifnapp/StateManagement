package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class XkcdResponse {

    //{"key":"value","key1":"value"...}

    //Getter and Setter methods
    //public String getMonth(){ return month: } <-- Getter. In our code controller (service impl) to access -> resp.getMonth()
    //public void setMonth(String mon){ month = mon) <-- Setter.  In code -> resp.setMonth("June")

    private String month;

    private int num;

    private String link;

    private String year;

    private String news;

    private String transcript;

    private String safe_title;

    private String alt;

    private String img;

    private String title;

    private String day;

}

