package com.kpi.delivery.controller;

import com.kpi.delivery.domain.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("order/destination")
    public @ResponseBody List<String> getDestination() {
        return orderService.getAllDestinations();
    }

    @GetMapping("order/good")
    public @ResponseBody List<String> getGoods() {
        return orderService.getAllGoods();
    }

    @GetMapping("order/price")
    public @ResponseBody List<Double> getPrices() {
        return orderService.getAllPrices();
    }

    @PutMapping("order/destination")
    public void sendDestination(@RequestBody String destination) {
        orderService.saveDestination(destination);
    }

    @PutMapping("order/good")
    public void sendGood(@RequestBody String good) {
        orderService.saveGood(good);
    }

    @PutMapping("order/price")
    public void sendPrice(@RequestBody Double price) {
        orderService.savePrice(price);
    }
}
