package com.skatemerch.dao;

import com.skatemerch.model.Skater;

import java.util.List;

public interface SkaterDao {

    int insertSkater(Skater skater);

    List<Object> selectAllSkaters();
}
