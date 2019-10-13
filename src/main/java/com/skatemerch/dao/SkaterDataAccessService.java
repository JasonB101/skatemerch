package com.skatemerch.dao;

import com.skatemerch.model.Skater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Array;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class SkaterDataAccessService implements SkaterDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SkaterDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertSkater(UUID id, Skater skater) {
        return 0;
    }

    @Override
    public List<Skater> selectAllSkaters() {
        String sql = "SELECT id, name FROM skater";
        List<Skater> skaters = jdbcTemplate.query(sql, ((resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            String type = resultSet.getString("type");
            String link = resultSet.getString("link");
    // THIS IS ALL WRONG, NEED TO FIGURE OUT POST BEFORE GET REQUESTS
    // Need to spin up instances of the product model and image model and use getters for values to pass to skater.
            String[] strings = {"test", "ting"};
            return new Skater(id, name, type, link, strings);

        }));

        return skaters;
    }

    @Override
    public Optional<Skater> selectSkaterById(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deleteSkaterById(UUID id) {
        return 0;
    }

    @Override
    public int updateSkaterById(UUID id, Skater skater) {
        return 0;
    }
}
