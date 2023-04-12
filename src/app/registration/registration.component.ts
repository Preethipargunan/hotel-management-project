import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{
user:User = new User();
constructor(private registerationService: RegistrationService){}
  ngOnInit():void{
    
  }
  userRegister(){
    console.log(this.user);
    this.registerationService.registerUser(this.user).subscribe(data=>

    {
alert("registerd sucessfully")
    },error=>alert("sorry unable to register") );
  }

}
