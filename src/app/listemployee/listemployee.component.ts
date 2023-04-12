import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit{
employees!: Employee[];
constructor(private employeeService:EmployeeService,private router:Router){}
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
    });
  }
    EmployeeDetails(employeeId:number)
    {
      this.router.navigate(['employee-details',employeeId]);
    }
    updateEmployee(employeeId:number){
      {
        this.router.navigate(['update-employee',employeeId])
      }
    }
    deleteEmployee(employeeId:number)
    {
      this.employeeService.deleteEmployee(employeeId).subscribe(data =>
        {
          console.log(data);
          this.getEmployees();
          alert("deleted successfully");
        })
    }
  }

