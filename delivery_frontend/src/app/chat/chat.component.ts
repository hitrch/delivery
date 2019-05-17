import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {interval} from 'rxjs';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private httpPostHeader =  new HttpHeaders({
    'Content-Type': 'application/json'
  });
  messages: string[] = [];

  constructor(private httpClient: HttpClient,
              private userService: UserService) {
  }

  ngOnInit() {
    interval(1000)
      .subscribe(() => this.loadMessages());
  }

  private loadMessages(): void {
    this.httpClient.get<string[]>('chat')
      .subscribe(m => this.messages = m);
  }

  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe();
  }

}
