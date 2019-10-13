package com.skatemerch.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.UUID;

public class Skater {

    private final UUID id;
    private final String name;
    private Product product;
    private List<Image> images;

    public Skater(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name,
                  @JsonProperty("type") String type,
                  @JsonProperty("link") String link,
                  @JsonProperty("urls-to-images") String[] urls) {
        this.id = id;
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
        System.out.println(id);
        System.out.println(name);
        System.out.println(product.getId());
        System.out.println(product.getLink());
        System.out.println(product.getSkater_id());
        for (Image image : images){
            System.out.println(image.getId());
            System.out.println(image.getProduct_id());
            System.out.println(image.getUrl_to_image());
        }
    }
}
