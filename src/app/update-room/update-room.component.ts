import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit{
  roomId!:number;
room: Room=new Room();
constructor(private roomService: RoomService,
  private route:ActivatedRoute,
  private router:Router){}
  ngOnInit(): void {
    this.roomId=this.route.snapshot.params['roomId'];
    this.roomService['getRoomId'](this.roomId).subscribe((data:Room) =>
    {
      this.room=data;

    },
    (error:any)=>console.log(error)
    );
  }
  onSubmit(){
    this.roomService['updateRoom'](this.roomId,this.room).subscribe((data:any)=>
    {
      this.goToRoomList();
    },
    (error:any)=>console.log(error));
  }
  goToRoomList(){
    this.router.navigate(['/rooms'])
     alert("updated successfully");
  }
}
