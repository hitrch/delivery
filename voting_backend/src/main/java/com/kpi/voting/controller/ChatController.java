package com.kpi.voting.controller;

import org.springframework.web.bind.annotation.*;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("chat")
public class ChatController {

    @PutMapping()
    public void answer(@RequestBody String message) {
        System.out.println();
        System.out.println("Message: " + message);
        System.out.println();
    }

}
