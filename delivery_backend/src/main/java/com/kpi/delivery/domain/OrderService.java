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

    public List<Order> getAllValidOrders()
    {
        return orderRepository.findAllValid();
    }

    public List<Order> getAllInvalidOrders()
    {
        return orderRepository.findAllInvalid();
    }

    public Boolean updateOrder(Long Id){
        orderRepository.updateOrder(Id);

        return Boolean.TRUE;
    }

    private boolean createOrder(RequestOrderDto order) {
        Order newOrder = new Order();
        newOrder.setLat(order.getLat());
        newOrder.setLng(order.getLng());
        newOrder.setGoods(order.getGoods());
        newOrder.setPrice(order.getPrice());
        newOrder.setDate(order.getDate());
        newOrder.setState(order.getState());
        newOrder = orderRepository.save(newOrder);
        orderRepository.flush();
        return (newOrder.getId() != null);
    }

    public void order(RequestOrderDto order) throws Exception {
        boolean isOrderCreated = createOrder(order);
        if (!isOrderCreated) throw new OperationNotSupportedException("Error while creating order.");
    }

    public boolean deleteAllOrders(){
        orderRepository.deleteAll();
        return true;
    }
}
