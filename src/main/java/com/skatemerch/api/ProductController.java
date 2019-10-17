package com.skatemerch.api;

import com.skatemerch.model.Product;
import com.skatemerch.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/products")
@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product, product.getImages());
    }


    @GetMapping
    public Object getAllProducts(){
        return productService.getAllProducts();
    }

}
