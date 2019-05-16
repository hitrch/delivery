package com.kpi.delivery.dto;

import javax.validation.constraints.NotNull;

public class RequestOrderDto {
    @NotNull
    private String destination;

    @NotNull
    private String goods;

    @NotNull
    private Double price;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

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
}
