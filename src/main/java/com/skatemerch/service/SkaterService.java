package com.skatemerch.service;

import com.skatemerch.dao.SkaterDao;
import com.skatemerch.model.Skater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class SkaterService {

    private final SkaterDao skaterDao;

    @Autowired
    public SkaterService(@Qualifier("postgres") SkaterDao skaterDao) {
        this.skaterDao = skaterDao;
    }

    public int addSkater(Skater skater){
        return skaterDao.insertSkater(skater);
    }

    public List<Skater> getAllSkaters(){
        return skaterDao.selectAllSkaters();
    }

    public Optional<Skater> getSkaterById(UUID id){
        return skaterDao.selectSkaterById(id);
    }
}
