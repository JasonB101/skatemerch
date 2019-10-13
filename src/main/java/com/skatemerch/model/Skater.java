package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Skater {

    private UUID id;
    private String name;
    private Product product;
    private List<Image> images = new ArrayList<>();


    public Skater(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name,
                  @JsonProperty("type") String type,
                  @JsonProperty("link") String link,
                  @JsonProperty("urls-to-images") String[] urls) {
        this.id = id == null ? UUID.randomUUID() : id;
        this.name = name;
        this.product = new Product(type, link, this.id);
        for (String url : urls){
            this.images.add(new Image(product.getId(), url));
        }
        checkInfo();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void checkInfo(){
        System.out.println();
        System.out.println("Skater Id: " + id);
        System.out.println("Skater Name: " + name);
        System.out.println();
        System.out.println("Product Id: " + product.getId());
        System.out.println("Product Type: " + product.getType());
        System.out.println("Product link: " + product.getLink());
        System.out.println("Skater id: " + product.getSkater_id());
        System.out.println();
        for (Image image : images){
            System.out.println("Image id: " + image.getId());
            System.out.println("Product id: " + image.getProduct_id());
            System.out.println("Image Url: " + image.getUrl_to_image());
            System.out.println();
        }
    }
}
