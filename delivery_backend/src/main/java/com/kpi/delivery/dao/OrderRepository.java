package com.kpi.delivery.dao;

import com.kpi.delivery.dao.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT orders FROM Order orders WHERE orders.state = 1")
    List<Order> findAllValid();

    @Query("SELECT orders FROM Order orders WHERE orders.state = 0")
    List<Order> findAllInvalid();

    @Transactional
    @Modifying
    @Query("UPDATE Order orders SET orders.state = 0 WHERE orders.id = ?1")
    void updateOrder(Long Id);
}

