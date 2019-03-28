import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public createUserId(): void {
    if( localStorage.getItem('userId') == null ) {
      let id = Math.floor(100000000 + Math.random() * 900000000).toString();
      localStorage.setItem('userId', id);
    }
  }

  public getUserId(): number {
    return parseInt(localStorage.getItem('userId'));
  }
}
