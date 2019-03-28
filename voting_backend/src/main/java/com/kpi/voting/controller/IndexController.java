package com.kpi.voting.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    @RequestMapping( value = "/home", method = RequestMethod.GET, produces = "text/html")
    public String index(){
        return "voting_frontend/index.html";
    }
}
