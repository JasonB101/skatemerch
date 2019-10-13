package com.skatemerch.api;

import com.skatemerch.model.Skater;
import com.skatemerch.service.SkaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/skater")
@RestController
public class SkaterController {

    private final SkaterService skaterService;

    @Autowired
    public SkaterController(SkaterService skaterService) {
        this.skaterService = skaterService;
    }

    @PostMapping
    public void addSkater(@RequestBody Skater skater){
        skaterService.addSkater(skater);
    }

    @GetMapping
    public List<Skater> getAllSkaters(){
        return skaterService.getAllSkaters();
    }

    @GetMapping(path = "{id}")
    public Skater getSkaterById(@PathVariable("id") UUID id){
        return skaterService.getSkaterById(id)
                .orElse(null);
    }
}
