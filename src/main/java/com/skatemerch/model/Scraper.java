package com.skatemerch.model;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

import javax.imageio.IIOException;
import java.io.IOException;
import java.net.MalformedURLException;

public class Scraper {

    private String baseURL = "https://www.amazon.com/NIKE-Revolution-Running-Black-Cool-Regular/dp/B06XKL3DBZ/ref=sr_1_fkmr2_2?dchild=1&keywords=kelvin+hoefler+shoes&qid=1571414716&s=apparel&sr=1-2-fkmr2";

    public Scraper(){
        WebClient client = new WebClient();
        client.getOptions().setJavaScriptEnabled(false);
        client.getOptions().setCssEnabled(false);
        client.getOptions().setUseInsecureSSL(true);

        try {
            HtmlPage page = client.getPage(baseURL);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
