import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  @Output()
  private select = new EventEmitter<string>();

  @Input()
  private name: string;

  @Input()
  private value: string;

  constructor() { }

  public answerQuestion(value){
    this.select.emit(value);
  }


}
