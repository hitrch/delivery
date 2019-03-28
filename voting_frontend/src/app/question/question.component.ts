import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../services/question.service";
import { Question } from "./question.model";
import {Answer} from "../answer/answer.model";
import {UserService} from "../services/user.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private question : Question;
  private interval : number;
  private answersCached : Array<Answer>;
  private answers : Array<Answer>;

  constructor(
    private questionService: QuestionService,
    private userService: UserService,
    private toaster: ToasterService) {
    this.answersCached = [
      new Answer("Yes", "true"),
      new Answer("No", "false")
    ];
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.questionService.getLastQuestion();
    }, 1000);

    this.questionService.question.subscribe(question => {
      if( question == null ) question = new Question();
      this.question = question;
      if( typeof this.question.id !== 'undefined' ) {
        this.answers = this.answersCached;
      }
      console.log(this.question.id);
    });

    this.userService.createUserId();
  }

  public answer(value: boolean){
    console.log(value);
    this.questionService.answerQuestion(this.question, value).then(res => {
      console.log(res);
      this.toaster.pop('success', "Thanks for answer.")
    }).catch(err => {
      console.log(err);

      this.toaster.pop('error', err.error);
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
