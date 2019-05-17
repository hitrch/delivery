package com.kpi.delivery.controller;

import com.kpi.delivery.domain.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class ShellOrderController {
    @Autowired
    private OrderService orderService;

    @ShellMethod("DESTRUCTION")
    public void del(){
        if(orderService.deleteAllOrders())
        {
            System.out.println("All orders successfully deleted");
        }
        else
        {
            System.out.println("Something went wrong");
        }
    }
}
