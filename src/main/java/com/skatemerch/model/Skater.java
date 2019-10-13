package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Skater {

    private UUID id;
    private String name;
    private String avatar;

    public Skater(UUID id, String name, String avatar){
        this.id = id == null ? UUID.randomUUID() : id;
        this.name = name;
        this.avatar = avatar;
    }



    public UUID getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getAvatar() { return avatar; }


}
