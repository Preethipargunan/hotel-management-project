import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{
  customerId!: number;
  profile!: Profile
  constructor(private route: ActivatedRoute,private profileService: ProfileService){
  }
  ngOnInit(): void {
this.customerId= this.route.snapshot.params['customerId'];
this.profileService.getCustomerId(this.customerId).subscribe(data =>{
  this.profile=data;
}
  );

  }  

}
