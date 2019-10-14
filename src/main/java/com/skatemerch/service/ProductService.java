package com.skatemerch.service;

import com.skatemerch.dao.ProductDao;
import com.skatemerch.model.Image;
import com.skatemerch.model.Product;
import com.skatemerch.model.Skater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class ProductService {

    private final ProductDao productDao;

    @Autowired
    public ProductService(@Qualifier("postgres") ProductDao productDao) {
        this.productDao = productDao;
    }

    public int addProduct(Product product, Skater skater, List<Image> images){
        return productDao.insertProduct(product, skater, images);
    }

    public Map<String,Object> getAllProducts(){
        return productDao.selectAllProducts();
    }

}
