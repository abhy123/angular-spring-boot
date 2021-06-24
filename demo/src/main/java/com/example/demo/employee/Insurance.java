package com.example.demo.employee;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class Insurance {

    String name;
    String company;
    String type;
    boolean isClaimLastYear;
    JsonArray familyCover = new JsonArray();
    int insuranceTerm;
    String previousDiseases;
    String cardImage;

    public Insurance(String name, String company, String type, boolean isClaimLastYear,
                     JsonArray familyCover, int insuranceTerm, String previousDiseases,
                     String cardImage) {
        this.name = name;
        this.company = company;
        this.type = type;
        this.isClaimLastYear = isClaimLastYear;
        this.familyCover = familyCover;
        this.insuranceTerm = insuranceTerm;
        this.previousDiseases = previousDiseases;
        this.cardImage = cardImage;
    }

    public Insurance() {
        JsonObject i = new JsonObject();
        i.addProperty("key", "Self");
        i.addProperty("value", false);
        familyCover.add(i);
        JsonObject i2 = new JsonObject();
        i2.addProperty("key", "Spouse");
        i2.addProperty("value", false);
        familyCover.add(i2);
        JsonObject i3 = new JsonObject();
        i3.addProperty("key", "Child");
        i3.addProperty("value", false);
        familyCover.add(i3);
        JsonObject i4 = new JsonObject();
        i4.addProperty("key", "Parents");
        i4.addProperty("value", false);
        familyCover.add(i4);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isClaimLastYear() {
        return isClaimLastYear;
    }

    public void setClaimLastYear(boolean claimLastYear) {
        isClaimLastYear = claimLastYear;
    }

    public JsonArray getFamilyCover() {
        return familyCover;
    }

    public void setFamilyCover(JsonArray familyCover) {
        this.familyCover = familyCover;
    }

    public int getInsuranceTerm() {
        return insuranceTerm;
    }

    public void setInsuranceTerm(int insuranceTerm) {
        this.insuranceTerm = insuranceTerm;
    }

    public String getPreviousDiseases() {
        return previousDiseases;
    }

    public void setPreviousDiseases(String previousDiseases) {
        this.previousDiseases = previousDiseases;
    }

    public String getCardImage() {
        return cardImage;
    }

    public void setCardImage(String cardImage) {
        this.cardImage = cardImage;
    }

    @Override
    public String toString() {
        return "Insurance{" +
                "name='" + name + '\'' +
                ", company='" + company + '\'' +
                ", type='" + type + '\'' +
                ", isClaimLastYear=" + isClaimLastYear +
                ", familyCover=" + familyCover +
                ", insuranceTerm=" + insuranceTerm +
                ", previousDiseases='" + previousDiseases + '\'' +
                ", cardImage='" + cardImage + '\'' +
                '}';
    }
}
