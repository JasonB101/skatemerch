package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Skater {

    private UUID id;
    private String skaterName;
    private String skaterAvatar;

    public Skater(@JsonProperty("skaterName") String skaterName,
                  @JsonProperty("skaterAvatar") String skaterAvatar){

        this.id = UUID.randomUUID();
        this.skaterName = skaterName;
        this.skaterAvatar = skaterAvatar;
        checkInfo();
    }



    public UUID getId() {
        return id;
    }
    public String getName() {
        return skaterName;
    }
    public String getAvatar() { return skaterAvatar; }


    public void checkInfo() {
        System.out.println();
        System.out.println("Skater Name: " + getName());
        System.out.println("Skater Avatar: " + getAvatar());
        System.out.println();
        System.out.println("Skater Id: " + getId());


    }

}
