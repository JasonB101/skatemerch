package com.skatemerch.service;

import com.skatemerch.dao.TrickTipDao;
import com.skatemerch.model.TrickTip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrickTipService {

    private final TrickTipDao trickTipDao;

    @Autowired
    public TrickTipService(@Qualifier("postgresTrickTip") TrickTipDao trickTipDao) {this.trickTipDao = trickTipDao;}

    public int addTrickTip(TrickTip trickTip){
        return trickTipDao.insertTrickTip(trickTip);
    }

    public List<Object> getTrickTips(){
        return trickTipDao.selectAllTrickTips();
    }

}
