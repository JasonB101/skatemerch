package com.skatemerch.dao;

import com.skatemerch.model.Image;
import com.skatemerch.model.Product;
import com.skatemerch.model.Skater;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

public interface ProductDao {

    int insertProduct (Product product, Skater skater, List<Image> images);

    Map<String,Object> selectAllProducts();

    int deleteSkaterById(UUID id);

    int updateSkaterById(UUID id, Product product);




}
