import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private baseURL="http://localhost:8080/booking"
  constructor(private httpClient:HttpClient) { }
  getBooksList():
  Observable<Book[]>
  {
  return this.httpClient.get<Book[]>(`${this.baseURL}/`);
}
createBook(book:Book):Observable<object>{
  return this.httpClient.post(`${this.baseURL}/save`,book);
}
deleteBook(bookingId:number):Observable<object>{
  return this.httpClient.delete(`${this.baseURL}/${bookingId}`)
}
}