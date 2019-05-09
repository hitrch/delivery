package com.kpi.delivery.dao.memoryStore;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class OrderStore {
    private List<String> destinations = Collections.synchronizedList(new ArrayList<>());

    private List<String> goods = Collections.synchronizedList(new ArrayList<>());

    private List<Double> prices = Collections.synchronizedList(new ArrayList<>());

    public void addDestination(final String destination){
        destinations.add(destination);
    }

    public void addGood(final String good){
        goods.add(good);
    }

    public void addPrice(final double price){
        prices.add(price);
    }

    public List<String> getDestinations(){
        return destinations;
    }

    public List<String> getGoods(){
        return goods;
    }

    public List<Double> getPrices(){
        return prices;
    }
}
