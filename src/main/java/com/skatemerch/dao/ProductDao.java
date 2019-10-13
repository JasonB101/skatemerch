package com.skatemerch.dao;

import com.skatemerch.model.Product;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductDao {

    int insertProduct (UUID id, Product product);

    default int insertProduct (Product product){
        UUID id = UUID.randomUUID();
        return insertProduct(id, product);
    }

    List<Product> selectAllProducts();

    int deleteSkaterById(UUID id);

    int updateSkaterById(UUID id, Product product);




}
