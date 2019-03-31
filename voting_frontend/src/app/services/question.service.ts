import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Question} from '../question/question.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {AnswerEntity} from '../answer/answer-entity.model';

@Injectable({providedIn: 'root'})
export class QuestionService {

  question = new BehaviorSubject<any>(new Question());

  constructor(private http: HttpClient, private userService: UserService) {
  }

  public getLastQuestion(): void {
    this.http.get('/question/last').subscribe(question => this.question.next(question));
  }

  public answerQuestion(question: Question, answer: boolean): Observable<any> {
    const answerEntity = new AnswerEntity(question.id, answer, this.userService.getUserId());
    return this.http.post('/question/answer', answerEntity);
  }

}
