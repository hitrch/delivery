export class Order {
  public id: number;
  public lat: number;
  public lng: number;
  public goods: string;
  public price: number;
  public date: Date;
  public state: number;
  constructor(lat: number, lng: number, goods: string, price: number, date: Date, state: number) {
    this.lat = lat;
    this.lng = lng;
    this.goods = goods;
    this.price = price;
    this.date = date;
    this.state = state;
  }
}
