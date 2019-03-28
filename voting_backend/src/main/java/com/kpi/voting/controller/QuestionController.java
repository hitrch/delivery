package com.kpi.voting.controller;

import com.kpi.voting.dao.VoteRepository;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.entity.RequestVote;
import com.kpi.voting.dao.entity.Vote;
import com.kpi.voting.domain.QuestionService;
import com.kpi.voting.domain.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private VoteService voteService;

    @GetMapping(value = "/last")
    public @ResponseBody Question getLastQuestion(){
        return questionService.getLastQuestion();
    }

    @PostMapping( value = "/answer", produces = "application/json" )
    public ResponseEntity<?> answer(@Valid @RequestBody RequestVote vote){

        boolean voteExists = voteService.isVoteExists(vote.getUserId(), vote.getQuestionId());
        if(voteExists) return new ResponseEntity<>("You have already voted.", HttpStatus.BAD_REQUEST);

        Question question = questionService.getQuestion(vote.getQuestionId());
        if( question == null ) return new ResponseEntity<>("Question not found.", HttpStatus.NOT_FOUND);

        boolean isVoteCreated = voteService.createVote(vote, question);
        if( !isVoteCreated ) return new ResponseEntity<>("Some troubles occurred.", HttpStatus.BAD_REQUEST);

        questionService.printQuestionStatistics(question.getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
