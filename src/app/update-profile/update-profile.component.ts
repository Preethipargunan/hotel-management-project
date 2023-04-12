import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{
  customerId!:number;
  profile: Profile=new Profile();
  constructor(private profileService: ProfileService,private route:ActivatedRoute,
    private router: Router){}
    ngOnInit(): void {
      this.customerId=this.route.snapshot.params['customerId'];
      this.profileService['getCustomerId'](this.customerId).subscribe((data:Profile)=>
      {
       this.profile=data;
      },(error:any)=>console.log(error));
   }
   onSubmit()
   {
    this.profileService['updateProfile'](this.customerId,this.profile).subscribe((data:any)=>
  {
    this.goToProfileList();
  },(error:any)=>console.log(error));
}
  goToProfileList(){
    this.router.navigate(['/profiles'])
  }

}
