package com.skatemerch.dao;

import com.skatemerch.model.Skater;

import java.util.Map;

public interface SkaterDao {

    int insertSkater(Skater skater);

    Map<String,Object> selectAllSkaters();
}
