import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile: Profile=new Profile();
  constructor(private profileService: ProfileService,
    private router: Router){}
    ngOnInit(): void {
    }
    saveProfile(){
      this.profileService['createProfile'](this.profile).subscribe((data:any)=>{
        console.log(data);
        this.goToProfileList()
        alert("profile registered successfully");
      },
      (error:any)=>console.log(error));
    }
    goToProfileList()
    {
     this.router.navigate(['/profiles']);
    }
    
    onSubmit()
  {
   console.log(this.profile);
   this.saveProfile();

  }
  
}


