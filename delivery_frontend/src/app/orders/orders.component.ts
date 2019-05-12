import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval} from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: [string[], string[], number[]] = [ [] , [] , [] ];

  constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
      interval(1000)
        .subscribe(() => this.loadOrders());
  }

  private loadOrders(): void {
    this.httpClient.get<string[]>('order/destination')
      .subscribe(o => this.orders[0] = o);
    this.httpClient.get<string[]>('order/good')
      .subscribe(o => this.orders[1] = o);
    this.httpClient.get<number[]>('order/price')
      .subscribe(p => this.orders[2] = p);
  }
}
