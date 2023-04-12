import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
employeeId!: number;
employee!: Employee
constructor(private route: ActivatedRoute,private employeeService: EmployeeService){

}
  ngOnInit(): void {
this.employeeId= this.route.snapshot.params['employeeId'];
this.employeeService.getEmployeeId(this.employeeId).subscribe(data =>{
  this.employee=data;
}
  );

  }
}
