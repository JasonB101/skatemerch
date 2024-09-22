package com.skatemerch.dao;

import com.skatemerch.model.TrickTip;

import java.util.List;

public interface TrickTipDao {

    int insertTrickTip(TrickTip trickTip);

    List<Object> selectAllTrickTips();
}
