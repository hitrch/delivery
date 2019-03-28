export class AnswerEntity {
  questionId: bigint;
  userId: number;
  answer: boolean;

  constructor(questionId:bigint, answer:boolean, userId: number){
    this.questionId=questionId;
    this.answer=answer;
    this.userId=userId;
  }
}
