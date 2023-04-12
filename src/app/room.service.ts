import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
private baseURL="http://localhost:8080/room";
  constructor(private httpClient:HttpClient) { }
  getRoomsList():
  Observable<Room[]>
  {
    return this.httpClient.get<Room[]>(`${this.baseURL}/`);
  }
  addRoom(room:Room):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/save`,room);
  }
  getRoomId(roomId:number):Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/${roomId}`);
  }
  updateRoom(roomId:number,room:Room):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${roomId}`,room);
  }
  deleteRoom(roomId:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${roomId}`);
  }
}
