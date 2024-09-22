package com.skatemerch.api;

import com.skatemerch.model.TrickTip;
import com.skatemerch.service.TrickTipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RequestMapping("api/v1/trickTips")
@RestController
public class TrickTipController {

    private TrickTipService trickTipService;

    @Autowired
    public TrickTipController(TrickTipService trickTipService) {
        this.trickTipService = trickTipService;
    }

    @PostMapping
    public void addTrickTip(@Valid @NonNull @RequestBody TrickTip trickTip){
        trickTipService.addTrickTip(trickTip);
    }

    @GetMapping
    public Object getAllTrickTips(){
        return trickTipService.getTrickTips();
    }

}
