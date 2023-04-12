import { Component, OnInit } from '@angular/core';
import { LoginadminService } from '../loginadmin.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  admin:Admin =new Admin();
  constructor(private loginadminservice: LoginadminService,private router:Router){}

  ngOnInit(): void {
    
  }
  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
     alert("Admin login successfully") ;
     this.router.navigate(['/adminhome']);
    
    },
    (error:any)=>alert("sorry please enter crt password and email"));
    
  }
  

}
