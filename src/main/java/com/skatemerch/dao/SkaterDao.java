package com.skatemerch.dao;

import com.skatemerch.model.Skater;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SkaterDao {

    int insertSkater (UUID id, Skater skater);

    List<Skater> selectAllSkaters();

    Optional<Skater> selectSkaterById(UUID id);

    int deleteSkaterById(UUID id);

    int updateSkaterById(UUID id, Skater skater);




}
