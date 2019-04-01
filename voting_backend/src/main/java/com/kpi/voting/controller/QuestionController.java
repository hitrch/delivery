package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.domain.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping(value = "last")
    public @ResponseBody
    Question getLastQuestion() {
        return questionService.getLastQuestion();
    }

}
