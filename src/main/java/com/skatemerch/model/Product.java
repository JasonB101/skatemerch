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

    private Skater skater;
    private List<Image> images = new ArrayList<>();

    public Product(@JsonProperty("skaterId") UUID skaterId,
                  @JsonProperty("skaterName") String skaterName,
                  @JsonProperty("skaterAvatar") String skaterAvatar,
                  @JsonProperty("type") String type,
                  @JsonProperty("link") String link,
                  @JsonProperty("review") String review,
                  @JsonProperty("urlsToImages") String[] urls) {
        this.id = UUID.randomUUID();
        this.type = type;
        this.link = link;
        this.review = review;
        this.skater = new Skater(skaterId, skaterName, skaterAvatar);
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

    public UUID getSkater_id() {
        return skater.getId();
    }

    public Skater getSkater() { return skater; }

    public List<Image> getImages() { return images; }

    public void checkInfo(){
        System.out.println();
        System.out.println("Skater Id: " + skater.getId());
        System.out.println("Skater Name: " + skater.getName());
        System.out.println("Skater Avatar: " + skater.getAvatar());
        System.out.println();
        System.out.println("Product Id: " + getId());
        System.out.println("Product Type: " + getType());
        System.out.println("Product link: " + getLink());
        System.out.println("Product link: " + getReview());
        System.out.println("Skater id: " + getSkater_id());
        System.out.println();
        for (Image image : images){
            System.out.println("Image id: " + image.getId());
            System.out.println("Product id: " + image.getProduct_id());
            System.out.println("Image Url: " + image.getUrlToImage());
            System.out.println();
        }
    }
}
