package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Image {

    private UUID id;
    private UUID productId;
    private String urlToImage;

    public Image(UUID id, String url_to_image, UUID product_id){
        this(url_to_image, product_id);
        this.id = id;
    }

    public Image(String url_to_image, UUID product_id) {
        this.id = UUID.randomUUID();
        this.productId = product_id;
        this.urlToImage = url_to_image;
    }

    public UUID getId() {
        return id;
    }

    public UUID getProduct_id() {
        return productId;
    }

    public String getUrlToImage() {
        return urlToImage;
    }

}
