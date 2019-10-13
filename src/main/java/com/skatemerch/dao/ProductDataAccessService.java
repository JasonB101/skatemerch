package com.skatemerch.dao;

import com.skatemerch.model.Product;
import com.skatemerch.model.Skater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class ProductDataAccessService implements ProductDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProductDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertProduct(UUID id, Product product) {
        return 0;
    }

    @Override
    public List<Product> selectAllProducts() {
        return new ArrayList<>();
//        String sql = "SELECT id, name FROM skater";
//        List<Product> products = jdbcTemplate.query(sql, ((resultSet, i) -> {
//          return new Product();
//
//        }));
//
//        return products;
    }

    @Override
    public int deleteSkaterById(UUID id) {
        return 0;
    }

    @Override
    public int updateSkaterById(UUID id, Product product) {
        return 0;
    }
}
