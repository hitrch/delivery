export class Order {
  public id: number;
  public destination: string;
  public goods: string;
  public price: number;
  constructor(destination: string, goods: string, price: number) {
    this.destination = destination;
    this.goods = goods;
    this.price = price;
  }
}
