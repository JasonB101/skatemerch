package com.skatemerch.service;

import com.skatemerch.dao.ProductDao;
import com.skatemerch.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {

    private final ProductDao productDao;

    @Autowired
    public ProductService(@Qualifier("postgres") ProductDao productDao) {
        this.productDao = productDao;
    }

    public int addProduct(Product product){
        return productDao.insertProduct(product);
    }

    public List<Product> getAllProducts(){
        return productDao.selectAllProducts();
    }

}
