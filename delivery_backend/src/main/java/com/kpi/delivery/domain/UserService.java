package com.kpi.delivery.domain;

import com.kpi.delivery.dao.UserRepository;
import com.kpi.delivery.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void createUser(String userName) {
        User user = new User();
        user.setName(userName);
        userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

//    public List<User> getUsersBy(Predicate<User> predicate) {
//        return Stream.generate(userRepository.findAll().iterator()::next);
//    }

}
