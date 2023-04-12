import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseURL="http://localhost:8080/customer";
  constructor(private httpClient:HttpClient) { }
  getProfilesList():
  Observable<Profile[]>
  {
    return this.httpClient.get<Profile[]>(`${this.baseURL}/`);
  }
  createProfile(profile:Profile):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/save`,profile);
  }
  getCustomerId(customerId:number):Observable<Profile>{
    return this.httpClient.get<Profile>(`${this.baseURL}/${customerId}`);
  }
  
  updateProfile(customerId:number,profile:Profile):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${customerId}`,profile);
  }
  
}
