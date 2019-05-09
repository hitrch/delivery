package com.kpi.delivery.dao;

import com.kpi.delivery.dao.memoryStore.OrderStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderRepository {

    @Autowired
    private OrderStore orderStore;

    public void saveDestination(final String destination){
        orderStore.addDestination(destination);
    }

    public void saveGood(final String good){
        orderStore.addGood(good);
    }

    public void savePrice(final Double price){
        orderStore.addPrice(price);
    }

    public List<String> findAllDestinations(){
        return orderStore.getDestinations();
    }

    public List<String> findAllGoods(){
        return orderStore.getGoods();
    }

    public List<Double> findAllPrices(){
        return orderStore.getPrices();
    }
}
