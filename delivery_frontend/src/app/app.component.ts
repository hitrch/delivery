import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Unsubscribable} from 'rxjs';
//import * as OrderComponent from './order/order.component';
export enum ViewState {
  CHAT, ORDER, ORDERS
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Delivery 2035';
  readonly viewState = ViewState;
  state: ViewState = ViewState.ORDER;
  private intervalSubscription: Unsubscribable;
  showDialog = false;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.initUser();
  }
  openDialog() {
    this.showDialog = true;
  }
  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
