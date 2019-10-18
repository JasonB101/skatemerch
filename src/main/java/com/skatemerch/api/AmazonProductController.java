package com.skatemerch.api;

import com.skatemerch.model.Product;
import com.skatemerch.model.Scraper;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RequestMapping("api/v1/amazon")
@RestController
public class AmazonProductController {

    @PostMapping
    public void addProduct(@Valid @RequestBody Scraper scraper){

    }
}
