import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question.model';
import {Answer} from '../answer/answer.model';
import {ToasterService} from 'angular2-toaster';
import {interval, Unsubscribable} from 'rxjs';

const answersCached: Array<Answer> = [new Answer('Yes', 'true'), new Answer('No', 'false')];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  private question: Question;
  private answers: Array<Answer> = answersCached;
  private intervalSubscription: Unsubscribable;
  private questionSubscription: Unsubscribable;

  constructor(private questionService: QuestionService,
              private toaster: ToasterService) {
  }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
    this.questionSubscription = this.questionService.question.subscribe(question => this.question = question);
  }

  public answer(value: boolean): void {
    this.questionService.answerQuestion(this.question, value)
      .subscribe(() => this.toaster.pop('success', 'Thanks for answer.'),
        err => this.toaster.pop('error', err.error));
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }

}
