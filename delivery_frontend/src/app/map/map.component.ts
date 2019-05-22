import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {interval} from 'rxjs';
import {Order} from '../orders/order.model';
/*import {forEach} from "@angular/router/src/utils/collection";*/
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
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

    /*interval(1000)
      .subscribe(() => this.loadOrders());*/
  }

  private loadOrders(): void {
    this.httpClient.get<Order[]>('order').subscribe(orders => {
      /*this.overlays = orders;
      orders.forEach(() => {
      })*/
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
    this.overlays.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(),
        lng: this.selectedPosition.lng()}, Goods: this.goods, Price: this.price}));
    this.sendOrder(this.selectedPosition.lat(), this.selectedPosition.lng(), this.goods, this.price, new Date(), 0);
    this.goods = null;
    this.price = null;
    this.dialogVisible = false;
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

  sendOrder(lat: string, lng: string, goods: string, price: number, date: Date, state: number) {
    this.httpClient.post('order',
      JSON.stringify({ lat, lng, goods, price, date, state }),
      { headers: this.httpPostHeader, responseType: 'text' }).subscribe();
    console.log(lng);

  }
}
