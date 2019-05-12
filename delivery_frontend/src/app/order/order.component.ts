import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  showDialog = false;
  showAnimation = false;
  constructor(private httpClient: HttpClient,
              private toaster: ToasterService) {
  }

  sendOrder(destination: string, goods: string, price: string): void {
    this.httpClient.put('order/destination', destination)
       .subscribe();
    this.httpClient.put('order/good', goods)
      .subscribe();
    this.httpClient.put('order/price', +price)
      .subscribe(() => {this.toaster.pop('success', 'Thanks for answer.');
        });
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  showAnima() {
    this.showAnimation = true;
  }

  hideAnimation() {
    this.showAnimation = false;
  }
}
