package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Skater {

    private UUID id;
    private String skaterName;
    private String skaterAvatar;

    public Skater(UUID id,
                  @JsonProperty("skaterName") String skaterName,
                  @JsonProperty("skaterAvatar") String skaterAvatar){
        this.id = id == null ? UUID.randomUUID() : id;
        this.skaterName = skaterName;
        this.skaterAvatar = skaterAvatar;
    }



    public UUID getId() {
        return id;
    }
    public String getName() {
        return skaterName;
    }
    public String getAvatar() { return skaterAvatar; }


}
