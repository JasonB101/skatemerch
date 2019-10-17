package com.skatemerch.dao;

import com.skatemerch.model.Image;
import com.skatemerch.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository("postgresProduct")
public class ProductDataAccessService implements ProductDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProductDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertProduct(Product product, List<Image> images) {

        String productSQL = "INSERT INTO products (id, type, link, review, skaterId) VALUES (?,?,?, ?,?)";

        Object[] productInfo = {product.getId(), product.getType(), product.getLink(),
                                product.getReview(), product.getSkaterId()};

        String imageSQL = "INSERT INTO images (id, urlToImage, productId) VALUES (?,?,?)";

        jdbcTemplate.update(productSQL, productInfo);

        for (Image image : images){
            Object[] imageInfo = {image.getId(), image.getUrlToImage(), image.getProduct_id()};
            jdbcTemplate.update(imageSQL, imageInfo);
        }


        return 0;
    }

    @Override
    public List<Object> selectAllProducts() {
        List<Object> products = getProducts();
        return products;
    }

    private List<Object> getProducts(){
        String productsSQL = "SELECT * FROM products";
        List<Object> products = new ArrayList<>();


        jdbcTemplate.query(productsSQL, resultSet -> {
            Map<String, Object> product = new HashMap<>();
            String id = resultSet.getString("id");
            String type = resultSet.getString("type");
            String link = resultSet.getString("link");
            String skaterId = resultSet.getString("skaterId");
            String review = resultSet.getString("review");
            
            List<Object> images = getImages(id);

            product.put("id", id);
            product.put("type", type);
            product.put("link", link);
            product.put("review", review);
            product.put("skater", skaterId);
            product.put("images", images);

            products.add(product);
        });

        return products;
    }

    private List<Object> getImages(String productId){
        String imagesSQL = "SELECT * FROM images WHERE productId = ?";
        UUID pID = UUID.fromString(productId);
        List<Object> images = new ArrayList<>();

        jdbcTemplate.query(imagesSQL, new Object[]{pID}, resultSet -> {
            String id = resultSet.getString("id");
            String urlToImage = resultSet.getString("urlToImage");
            Map<String, String> imageFromDB = new HashMap<>();

            imageFromDB.put("id", id);
            imageFromDB.put("urlToImage", urlToImage);

            images.add(imageFromDB);
        });

        return images;
    }



}
