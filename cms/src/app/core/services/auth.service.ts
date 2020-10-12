import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_URL = 'http://localhost:8080/oauth/token'


  
  constructor(private http: HttpClient) { }

  getTokenForUser(username, password){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('angularapp:angularapp')
      })
    };


    return this.http.post(this.TOKEN_URL, httpOptions);
  }
}
