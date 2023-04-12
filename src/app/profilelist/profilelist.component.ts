import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit{
  profiles!: Profile[];
  constructor(private profileService:ProfileService,private router:Router){}
  ngOnInit(): void {
    this.getProfiles();
  }
  private getProfiles(){
    this.profileService.getProfilesList().subscribe(data =>{
      this.profiles = data;
    });
  }

ProfileDetails(customerId:number)
{
  this.router.navigate(['profile-details',customerId]);
}
updateProfile(customerId:number){
  {
    this.router.navigate(['update-profile',customerId])
  }
}

}
