package com.skatemerch.dao;

import com.skatemerch.model.Skater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("postgresSkater")
public class SkaterDataAccessService implements SkaterDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SkaterDataAccessService(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    public int insertSkater(Skater skater){
        String skaterSQL = "INSERT INTO skaters (id, name, avatar) VALUES (?,?,?) ON CONFLICT DO NOTHING";
        Object[] skaterInfo = {skater.getId(), skater.getName(), skater.getAvatar()};

        jdbcTemplate.update(skaterSQL, skaterInfo);

        return 0;
    }

    @Override
    public List<Object> selectAllSkaters() {
        return getSkaters();
    }


    private List<Object> getSkaters(){
        String skatersSQL = "SELECT * FROM skaters";
        List<Object> skaters = new ArrayList<>();

        jdbcTemplate.query(skatersSQL, resultSet -> {
            String id = resultSet.getString("id");
            String name = resultSet.getString("name");
            String avatar = resultSet.getString("avatar");
            Map<String, String> skaterFromDB = new HashMap<>();

            skaterFromDB.put("id", id);
            skaterFromDB.put("name", name);
            skaterFromDB.put("avatar", avatar);

            skaters.add(skaterFromDB);


        });

        return skaters;
    }
}
