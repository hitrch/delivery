import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {interval} from 'rxjs';
import {Order} from '../orders/order.model';
import {forEach} from '@angular/router/src/utils/collection';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  orders: Order[] = [];

  options: any;

  overlays: any[];

  dialogVisible: boolean;

  goods: string;

  price: number;

  selectedPosition: any;

  infoWindow: any;

  private httpPostHeader =  new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private messageService: MessageService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.options = {
      center: {lat: 50.44728787881339, lng: 30.45534610748291},
      zoom: 15
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();

    this.loadOrders();
  }

  private loadOrders(): void {
    this.httpClient.get<Order[]>('order/valid').subscribe(orders => {
      this.orders = orders;
      this.overlays = [];
      orders.forEach((order) => {
        this.overlays.push(new google.maps.Marker({position: {lat: order.lat,
            lng: order.lng}, Goods: order.goods, Price: order.price}));
      });
    });
  }

  handleMapClick(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
    const isMarker = event.overlay.Goods !== undefined;
    if (isMarker) {
      this.infoWindow.setContent('Goods: ' + event.overlay.Goods + '<br/>Price: ' + event.overlay.Price);
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({severity: 'info', summary: 'Marker Selected', detail: ''});
    } else {
      this.messageService.add({severity: 'info', summary: 'Shape Selected', detail: ''});
    }
  }

  addMarker() {
    try {
      this.overlays.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(),
          lng: this.selectedPosition.lng()}, Goods: this.goods, Price: this.price}));
      const date = new Date();
      this.sendOrder(this.selectedPosition.lat(), this.selectedPosition.lng(), this.goods, this.price, date.toString(), 1);
      this.goods = null;
      this.price = null;
      this.dialogVisible = false;
      this.delay(5000).then(() => {
        this.loadOrders();
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleDragEnd(event) {
    this.messageService.add({severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
      ];
    }
  }

  sendOrder(lat: number, lng: number, goods: string, price: number, date: string, state: number) {
    this.httpClient.post('order',
      JSON.stringify({ lat, lng, goods, price, date, state }),
      { headers: this.httpPostHeader, responseType: 'text' }).subscribe();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
  /*marking order as done*/
  updateOrder(id: number) {
    this.httpClient.put(`/order/${id}`,
      { headers: this.httpPostHeader, responseType: 'text' }).subscribe();
    this.delay(5000).then(() => {
      this.loadOrders();
    });
  }
}
