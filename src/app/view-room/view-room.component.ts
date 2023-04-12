import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit{
roomId!: number;
room!:Room
constructor(private route: ActivatedRoute,private roomService: RoomService){}
  ngOnInit(): void {
   this.roomId=this.route.snapshot.params['roomId'];
   this.roomService.getRoomId(this.roomId).subscribe(data =>
    {
      this.room = data;
    });
  }
}
