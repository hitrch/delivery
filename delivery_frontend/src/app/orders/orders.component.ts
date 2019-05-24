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

  data: any;

  constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
      this.loadOrders();

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'First Dataset',
            data: []
          },
          {
            label: 'Second Dataset',
            data: []
          }
        ]
      };

      this.data.labels.push();
      this.data.datasets[0].data.push(100);
      this.data.datasets[1].data.push(100);
  }

  private loadOrders(): void {
    this.httpClient.get<Order[]>('order/valid').subscribe(orders => {
      this.orders = orders;
    });
  }
}
