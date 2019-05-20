import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderComponent} from './order/order.component';
import {OrdersComponent} from './orders/orders.component';
import {SpaceshipComponent} from './spaceship/spaceship.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ChatComponent } from './chat/chat.component';
import { MapComponent } from './map/map.component';
import {FormsModule} from '@angular/forms';
import {GMapModule} from 'primeng/gmap';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrdersComponent,
    ChatComponent,
    SpaceshipComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GMapModule,
    DialogModule,
    CheckboxModule,
    ToastModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    MatCardModule, MatTabsModule, FormsModule
  ],
  providers: [ToasterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
