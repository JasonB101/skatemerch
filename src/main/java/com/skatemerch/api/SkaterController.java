package com.skatemerch.api;

import com.skatemerch.model.Skater;
import com.skatemerch.service.SkaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/skaters")
@RestController
public class SkaterController {

    private SkaterService skaterService;

    @Autowired
    public SkaterController(SkaterService skaterService) {
        this.skaterService = skaterService;
    }

    @PostMapping
    public void addSkater(@RequestBody Skater skater){
        skaterService.addSkater(skater);
    }

    @GetMapping
    public Object getAllSkaters(){
        return skaterService.getSkaters();
    }

}
