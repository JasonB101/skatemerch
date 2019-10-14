package com.skatemerch.dao;

import com.skatemerch.model.Image;
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
    public int insertProduct(Product product, Skater skater, List<Image> images) {
        String skaterSQL = "INSERT INTO skaters (id, name, avatar) VALUES (?,?,?) ON CONFLICT DO NOTHING";
        Object[] skaterInfo = {skater.getId(), skater.getName(), skater.getAvatar()};
        String productSQL = "INSERT INTO products (id, type, link, skaterId) VALUES (?,?,?,?)";
        Object[] productInfo = {product.getId(), product.getType(), product.getLink(), product.getSkater_id()};
        String imageSQL = "INSERT INTO images (id, urlToImage, productId) VALUES (?,?,?)";
        jdbcTemplate.update(skaterSQL, skaterInfo);
        jdbcTemplate.update(productSQL, productInfo);

        for (Image image : images){
            Object[] imageInfo = {image.getId(), image.getUrlToImage(), image.getProduct_id()};
            jdbcTemplate.update(imageSQL, imageInfo);
        }


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
