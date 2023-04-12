import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit{
room: Room=new Room();
constructor(private roomService: RoomService,
  private router: Router){}
  ngOnInit(): void {
   
  }
  saveRoom(){
    this.roomService['addRoom'](this.room).subscribe((data:any)=>
    {
      console.log(data);
      this.goToRoomList()
    },
    (error:any)=>console.log(error));
  }
  goToRoomList(){
    this.router.navigate(['/rooms']);
  }
  onSubmit()
  {
    console.log(this.room);
    this.saveRoom();
  }
}
{}
