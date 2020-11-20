import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';

const AUTH_URL = environment.API_URL + '/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService
  ) { }


  login(username, password) {
    return new Promise((resolve, reject) => {
      this.http.post(AUTH_URL, {
        username: username,
        password: password
      }).subscribe((data: any) => {
        this.updateTokens(data.tokens);
        this.updateUser(data.user);
        resolve(data.user);
      }, (err) => {
        reject(err);
      });
    });
  }

  updateTokens(tokens) {
    localStorage.setItem("token", "Bearer " + tokens.access_token);
  }

  updateUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.setItem("token", null);
    localStorage.setItem("user", null);
    this.isLoggedIn = false;
  }

  authenticated(): boolean {
    let loggedUser = this.getLoggedUser();
    let token = this.getToken();
    
    // Verificare che il token sia valido ha maggiore priorità rispetto
    // alla presenza dell'utente loggato
    if(!token) {
      return false;
    }
    if(this.jwt.isTokenExpired(token)) {
      return false;
    }

    if(!loggedUser) {
      return false;
    }

    return true;
  }
}
