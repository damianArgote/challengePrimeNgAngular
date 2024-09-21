import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../../core/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    { username: 'admin', id: 1, role: 'admin', token: 'admin-token'},
    { username: 'user', id: 2, role: 'user', token : 'user-token'},
  ];
  constructor() { }

  login(username: string, password: string): Observable<User>{
    const user = this.users.find((u) => u.username === username);
    return of(user!)
  }

  isAuth(): Observable<User | null>{
    const token = localStorage.getItem('token') || null;
    if(!token){
      return of(null)
    }
    const user = this.users.find((u) => u.token === token);
    return of(user!)
  }
}
