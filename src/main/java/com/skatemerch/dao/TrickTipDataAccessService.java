package com.skatemerch.dao;

import com.skatemerch.model.TrickTip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("postgresTrickTip")
public class TrickTipDataAccessService implements TrickTipDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TrickTipDataAccessService(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    public int insertTrickTip(TrickTip trickTip){
        String trickTipSQL = "INSERT INTO trickTips (id, trickTitle, videoLink, tip) VALUES (?,?,?,?) ON CONFLICT DO NOTHING";
        Object[] trickTipInfo = {trickTip.getId(), trickTip.getTrickTitle(), trickTip.getVideoLink(), trickTip.getTip()};

        jdbcTemplate.update(trickTipSQL, trickTipInfo);

        return 0;
    }

    @Override
    public List<Object> selectAllTrickTips() {
        return getTrickTips();
    }


    private List<Object> getTrickTips(){
        String skatersSQL = "SELECT * FROM trickTips";
        List<Object> trickTips = new ArrayList<>();

        jdbcTemplate.query(skatersSQL, resultSet -> {
            String id = resultSet.getString("id");
            String trickTitle = resultSet.getString("trickTitle");
            String videoLink = resultSet.getString("videoLink");
            String tip = resultSet.getString("tip");
            Map<String, String> trickTipFromDB = new HashMap<>();

            trickTipFromDB.put("id", id);
            trickTipFromDB.put("trickTitle", trickTitle);
            trickTipFromDB.put("videoLink", videoLink);
            trickTipFromDB.put("tip", tip);

            trickTips.add(trickTipFromDB);


        });

        return trickTips;
    }
}
