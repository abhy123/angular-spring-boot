package com.example.demo.search;

public class Provider {

    int providerId;
    String firstName;
    String lastName;
    String title;
    String facilities;

    public Provider(int providerId, String firstName, String lastName, String title, String facilities) {
        this.providerId = providerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.facilities = facilities;
    }

    public int getProviderId() {
        return providerId;
    }

    public void setProviderId(int providerId) {
        this.providerId = providerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFacilities() {
        return facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }
}
