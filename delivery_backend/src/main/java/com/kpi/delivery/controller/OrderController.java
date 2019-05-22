package com.kpi.delivery.controller;

import com.kpi.delivery.dao.entity.Order;
import com.kpi.delivery.domain.OrderService;
import com.kpi.delivery.dto.RequestOrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public @ResponseBody List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping(produces = "application/json")
    public ResponseEntity<?> order(@Valid @RequestBody RequestOrderDto order) {
        try {
            System.out.println(order.getLat());
            //orderService.order(order);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
