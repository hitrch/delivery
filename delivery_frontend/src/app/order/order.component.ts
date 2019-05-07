import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
