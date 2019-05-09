import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {

  constructor(private httpClient: HttpClient,
              private toaster: ToasterService) {
  }

  sendOrder(destination: string, goods: string, price: string): void {
    this.httpClient.put('order', destination);
    this.httpClient.put('order', goods);
    if (price === ' ') {
      this.httpClient.put('order', Double.parseDouble(price))
        .subscribe(() => this.toaster.pop('success', 'Order proceeded.'));
    } else {
      this.httpClient.put()
        .subscribe(() => this.toaster.pop('success', 'Order proceeded.'));
    }
  }
}
