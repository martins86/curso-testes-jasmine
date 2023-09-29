import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;

  constructor() {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = !!localStorage.getItem('token');
  }

  signin(credentials: User) {
    let isAuth: User;

    isAuth = { name: 'teste', email: 'test@example.com', password: '12345', token: '12345678' };

    if (
      isAuth.email == credentials.email &&
      isAuth.password == credentials.password
    ) {
      this.authenticated = true;
      localStorage.setItem('token', isAuth.token);
      return of({}).pipe(delay(1000));
    }
    return throwError(() => 'Invalid email or password!');
  }
}
