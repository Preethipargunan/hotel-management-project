import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit{
rooms!:Room[];
constructor(private roomService:RoomService,private router:Router){

}
  ngOnInit(): void {
    this.getRooms();
  }
  private getRooms(){
    this.roomService.getRoomsList().subscribe(data =>{
      this.rooms =data;
    });
  }
  RoomDetails(roomId:number)
  {
    this.router.navigate(['view-room',roomId]);
  }
  updateRoom(roomId:number)
  {
    {
      this.router.navigate(['update-room',roomId]);
    }
  }
  deleteRoom(roomId:number)
  {
    this.roomService.deleteRoom(roomId).subscribe(data =>
      {
        console.log(data);
        this.getRooms();
        alert("deleted successfully");
      })
  }

}
