package com.kpi.delivery.domain;

import com.kpi.delivery.dao.UserRepository;
import com.kpi.delivery.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void createUser(String userName, String password) {
        User user = new User();
        user.setName(userName);
        user.setPassword(password);
        userRepository.save(user);
    }

    public User getUser(String name) {
        Optional<User> user = userRepository.findByName(name);
        return user.orElse(null);
    }
}
