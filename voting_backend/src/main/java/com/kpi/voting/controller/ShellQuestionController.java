package com.kpi.voting.controller;

import com.kpi.voting.domain.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class ShellQuestionController {

    @Autowired
    private QuestionService questionService;

    @ShellMethod("Create new question.")
    public void qc(String question){
        final Long id = questionService.createQuestion(question);
        if( id == null ) {
            System.out.println("Something went wrong.");
            return;
        }
        System.out.println("Created question with id = "+id);
    }
}
