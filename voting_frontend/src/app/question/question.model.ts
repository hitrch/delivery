export class Question {
  id: bigint;
  title: string;

  constructor(id?: bigint, title?: string) {
    this.id = id;
    this.title = title;
  }
}
