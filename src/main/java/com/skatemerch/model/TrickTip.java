package com.skatemerch.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class TrickTip {
    private UUID id;
    private String trickTitle;
    private String videoLink;
    private String tip;

    public TrickTip(@JsonProperty("trickTitle") String trickTitle,
                  @JsonProperty("videoLink") String videoLink,
                  @JsonProperty("tip") String tip){

        this.id = UUID.randomUUID();
        this.trickTitle = trickTitle;
        this.videoLink = videoLink;
        this.tip = tip;
        checkInfo();
    }

    public UUID getId() {
        return id;
    }
    public String getTrickTitle() {
        return trickTitle;
    }
    public String getVideoLink() { return videoLink; }
    public String getTip() { return tip; }

    public void checkInfo() {
        System.out.println();
        System.out.println("Trick Title: " + getTrickTitle());
        System.out.println("Video Link: " + getVideoLink());
        System.out.println("Tip: " + getTip());
        System.out.println();
        System.out.println("Trick Tip ID: " + getId());


    }
}
