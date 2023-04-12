import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
employeeId!:number;
employee: Employee=new Employee();
constructor(private employeeService: EmployeeService,private route:ActivatedRoute,
  private router: Router){}
  ngOnInit(): void {
   this.employeeId=this.route.snapshot.params['employeeId'];
   this.employeeService['getEmployeeId'](this.employeeId).subscribe((data:Employee)=>
   {
    this.employee=data;
   },(error:any)=>console.log(error));
}
onSubmit()
{
  this.employeeService['updateEmployee'](this.employeeId,this.employee).subscribe((data:any)=>
  {
    this.goToEmployeeList();
  },(error:any)=>console.log(error));
}
  goToEmployeeList(){
    this.router.navigate(['/employees'])
    alert("updated successfully");
  }

}
