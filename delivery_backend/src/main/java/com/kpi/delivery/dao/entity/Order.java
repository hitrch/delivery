package com.kpi.delivery.dao.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "OderTable")
@TableGenerator(name="tab", initialValue=0, allocationSize=1)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator="tab")
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
