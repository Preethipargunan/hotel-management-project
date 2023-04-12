import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:8080/hotelEmployee";
  constructor(private httpClient:HttpClient) { }
  getEmployeesList():
  Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/`);
  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/save`,employee);
  }
  getEmployeeId(employeeId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }
  updateEmployee(employeeId:number,employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${employeeId}`,employee);
  }
  deleteEmployee(employeeId:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
  }
}
