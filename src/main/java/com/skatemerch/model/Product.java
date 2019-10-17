package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Product {

    private String review;
    private UUID id;
    private String type;
    private String link;
    private UUID skaterId;
    private List<Image> images = new ArrayList<>();

    public Product(@JsonProperty("skaterId") UUID skaterId,
                  @JsonProperty("type") String type,
                  @JsonProperty("link") String link,
                  @JsonProperty("review") String review,
                  @JsonProperty("urlsToImages") String[] urls) {
        this.id = UUID.randomUUID();
        this.type = type;
        this.link = link;
        this.review = review;
        for (String url : urls){
            this.images.add(new Image(url, this.id));
        }
        checkInfo();
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

    public String getReview() { return review; }

    public UUID getSkaterId() {
        return skaterId;
    }

    public List<Image> getImages() { return images; }

    public void checkInfo(){
        System.out.println();
        System.out.println("Skater Id: " + getSkaterId());
        System.out.println();
        System.out.println("Product Id: " + getId());
        System.out.println("Product Type: " + getType());
        System.out.println("Product link: " + getLink());
        System.out.println("Product link: " + getReview());
        System.out.println("Skater id: " + getSkaterId());
        System.out.println();
        for (Image image : images){
            System.out.println("Image id: " + image.getId());
            System.out.println("Product id: " + image.getProduct_id());
            System.out.println("Image Url: " + image.getUrlToImage());
            System.out.println();
        }
    }
}
