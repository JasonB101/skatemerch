package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Image {

    private UUID id;
    private UUID product_id;
    private String url_to_image;

    public Image(UUID id, String url_to_image, UUID product_id){
        this(url_to_image, product_id);
        this.id = id;
    }

    public Image(String url_to_image, UUID product_id) {
        this.id = UUID.randomUUID();
        this.product_id = product_id;
        this.url_to_image = url_to_image;
    }

    public UUID getId() {
        return id;
    }

    public UUID getProduct_id() {
        return product_id;
    }

    public String getUrl_to_image() {
        return url_to_image;
    }

}