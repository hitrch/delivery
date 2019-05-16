package com.kpi.delivery.domain;

import com.kpi.delivery.dao.OrderRepository;
import com.kpi.delivery.dao.entity.Order;
import com.kpi.delivery.dto.RequestOrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.OperationNotSupportedException;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    private boolean createOrder(RequestOrderDto order) {
        Order newOrder = new Order();
        newOrder.setDestination(order.getDestination());
        newOrder.setGoods(order.getGoods());
        newOrder.setPrice(order.getPrice());
        newOrder = orderRepository.save(newOrder);
        orderRepository.flush();
        return (newOrder.getId() != null);
    }

    public void order(RequestOrderDto order) throws Exception {
        boolean isOrderCreated = createOrder(order);
        if (!isOrderCreated) throw new OperationNotSupportedException("Error while creating order.");
    }
}
