import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Unsubscribable} from 'rxjs';

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
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.initUser();
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
