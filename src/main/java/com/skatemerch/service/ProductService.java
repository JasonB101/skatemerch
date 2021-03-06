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
    public ProductService(@Qualifier("postgresProduct") ProductDao productDao) {
        this.productDao = productDao;
    }

    public int addProduct(Product product, List<Image> images){
        return productDao.insertProduct(product, images);
    }


    public List<Object> getAllProducts(){
        return productDao.selectAllProducts();
    }

}
