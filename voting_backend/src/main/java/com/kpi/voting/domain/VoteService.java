package com.kpi.voting.domain;

import com.kpi.voting.dao.VoteRepository;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.entity.RequestVote;
import com.kpi.voting.dao.entity.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public boolean isVoteExists(Long userId, Long questionId){
        Optional<Vote> vote = voteRepository.findByUserIdAndQuestionId(userId, questionId);
        return vote.isPresent();
    }

    public boolean createVote(RequestVote vote, Question question){
        Vote newVote = new Vote();

        newVote.setUserId(vote.getUserId());
        newVote.setAnswer(vote.isAnswer());
        newVote.setQuestion(question);

        newVote = voteRepository.save(newVote);
        voteRepository.flush();

        return (newVote.getId() != null);
    }
}
