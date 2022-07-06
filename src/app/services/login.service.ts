import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(this.link, identifiants);
  }

  seDeconnecter() {
    localStorage.removeItem('GLN_TOKEN');
  }

  estConnecte() {
    let token = localStorage.getItem('GLN_TOKEN');
    return !!token;
  }
}
