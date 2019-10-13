package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Product {
    private UUID id;
    private String type;
    private String link;
    private UUID skater_id;

    public Product(@JsonProperty("type") String type,
                   @JsonProperty("link") String link,
                   UUID skater_id) {
        this.id = UUID.randomUUID();
        this.type = type;
        this.link = link;
        this.skater_id = skater_id;
    }

    public UUID getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getLink() {
        return link;
    }

    public UUID getSkater_id() {
        return skater_id;
    }






}
