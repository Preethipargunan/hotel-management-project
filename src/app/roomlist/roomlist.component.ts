import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from '../room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent  implements OnInit{
  rooms!:Room[];
  constructor(private roomsService:RoomsService,private router:Router){
  
  }
    ngOnInit(): void {
      this.getRooms();
    }
  
  private getRooms(){
    this.roomsService.getRoomsList().subscribe(data =>{
      this.rooms =data;
    });
  }
  RoomDetails(roomId:number)
  {
    this.router.navigate(['view-room',roomId]);
  }
  }


