import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question.model';
import {Answer} from '../answer/answer.model';
import {ToasterService} from 'angular2-toaster';
import {Unsubscribable} from 'rxjs';
import {filter} from 'rxjs/operators';

const answersCached: Answer<boolean>[] =
  [new Answer('Yes', true, {'background-color': '#4CAF50'}),
    new Answer('No', false, {'background-color': 'red'})];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  public question: Question;
  public answers: Answer<any>[] = answersCached;
  public disabled = false;
  private questionSubscription: Unsubscribable;

  constructor(private questionService: QuestionService,
              private toaster: ToasterService) {
  }

  ngOnInit(): void {
    this.questionSubscription = this.questionService.question
      .pipe(filter(q => !this.question || q.id !== this.question.id))
      .subscribe(question => {
        this.question = question;
        this.disabled = false;
      });
  }

  public selectedAnswer(answer: Answer<any>): void {
    this.questionService.answerQuestion(this.question, answer)
      .subscribe(() => {
          this.disabled = true;
          this.toaster.pop('success', 'Thanks for answer.');
        },
        err => this.toaster.pop('error', err.error));
  }

  ngOnDestroy(): void {
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }

}
