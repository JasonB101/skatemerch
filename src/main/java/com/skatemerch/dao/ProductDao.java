package com.skatemerch.dao;

import com.skatemerch.model.Image;
import com.skatemerch.model.Product;

import java.util.List;
import java.util.Map;


public interface ProductDao {

    int insertProduct (Product product, List<Image> images);

    List<Object> selectAllProducts();





}
