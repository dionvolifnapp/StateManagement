package com.example.demo.service.nasa;

import com.example.demo.domain.NasaApiResponse;

public interface NasaService {

    NasaApiResponse getNasaSingle(String date, String thumbs);

    NasaApiResponse[] getNumNasaMulti(String count, String thumbs);

    NasaApiResponse[] getDateRangeNasaMulti(String thumbs, String end_date, String start_date);
}
