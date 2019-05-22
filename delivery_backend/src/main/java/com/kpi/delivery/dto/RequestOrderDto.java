package com.kpi.delivery.dto;

import javax.validation.constraints.NotNull;

public class RequestOrderDto {
    @NotNull
    private Double lat;

    @NotNull
    private Double lng;

    @NotNull
    private String goods;

    @NotNull
    private Double price;

    @NotNull
    private String date;

    @NotNull
    private int state;

    public String getGoods() {
        return goods;
    }

    public void setGoods(String goods) {
        this.goods = goods;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
