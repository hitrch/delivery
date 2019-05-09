package com.kpi.delivery.domain;

import com.kpi.delivery.dao.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public void saveDestination(final String destination) {
        orderRepository.saveDestination(destination);
    }

    public void saveGood(final String good) {
        orderRepository.saveGood(good);
    }

    public void savePrice(final Double price) {
        orderRepository.savePrice(price);
    }

    public List<String> getAllDestinations() {
        return orderRepository.findAllDestinations();
    }

    public List<String> getAllGoods() {
        return orderRepository.findAllGoods();
    }

    public List<Double> getAllPrices() {
        return orderRepository.findAllPrices();
    }
}
