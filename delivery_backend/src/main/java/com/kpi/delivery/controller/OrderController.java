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

    @GetMapping(value = "/valid")
    public @ResponseBody List<Order> getValidOrders() {
        return orderService.getAllValidOrders();
    }

    @GetMapping(value = "/invalid")
    public @ResponseBody List<Order> getInvalidOrders() {
        return orderService.getAllInvalidOrders();
    }

    @PostMapping(produces = "application/json")
    public ResponseEntity<?> order(@Valid @RequestBody RequestOrderDto order) {
        try {
            orderService.order(order);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/{id}")
    public @ResponseBody Boolean updateOrder(@PathVariable("id") Long id) {
        System.out.println(id);
        return orderService.updateOrder(id);
    }
}
