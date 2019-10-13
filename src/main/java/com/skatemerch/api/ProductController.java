package com.skatemerch.api;

import com.skatemerch.model.Product;
import com.skatemerch.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/products")
@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public void addSkater(@RequestBody Product product){
        productService.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllSkaters(){
        return productService.getAllProducts();
    }

}
