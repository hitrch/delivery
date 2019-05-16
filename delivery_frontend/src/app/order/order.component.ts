import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  private httpPostHeader =  new HttpHeaders({
    'Content-Type': 'application/json'
  });
  destinations = [{target: 'My home'}, {target: 'D1'}];
  selectedDestination = this.destinations[1].target;
  showDialog = false;
  showAnimation = false;
  constructor(private httpClient: HttpClient) {
  }

  sendOrder(destination: string, goods: string, price: string) {
    this.httpClient.post('order',
      JSON.stringify({ destination, goods, price }),
      { headers: this.httpPostHeader, responseType: 'text' }).subscribe();
  }

  onDestinationChane(dest) {
    this.selectedDestination = dest;
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
