import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { interval} from 'rxjs';
import {Order} from './order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];
  /*orders: [string[], string[], number[]] = [ [] , [] , [] ];*/

  constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
      interval(1000)
        .subscribe(() => this.loadOrders());
  }

  private loadOrders(): void {
    this.httpClient.get<Order[]>('order').subscribe(orders => {
      this.orders = orders;
    });
  }
}
