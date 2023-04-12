import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
baseUrl="http://localhost:8080/registeruser1";
  constructor( private httpClient: HttpClient) { }

  registerUser(user: User): Observable<object> {
  console.log(user);
  return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
