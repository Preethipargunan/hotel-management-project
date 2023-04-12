import { Injectable } from '@angular/core';
import { Rooms } from './rooms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
private baseURL="http://localhost:8080/room";
  constructor(private httpClient:HttpClient) { }
  getRoomsList():
  Observable<Rooms[]>
  {
    return this.httpClient.get<Rooms[]>(`${this.baseURL}/`);
  }
  addRoom(rooms:Rooms):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/save`,rooms);
  }
  getRoomId(roomId:number):Observable<Rooms>{
    return this.httpClient.get<Rooms>(`${this.baseURL}/${roomId}`);
  }
  updateRoom(roomId:number,rooms:Rooms):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${roomId}`,rooms);
  }
  deleteRoom(roomId:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${roomId}`);
  }
}
