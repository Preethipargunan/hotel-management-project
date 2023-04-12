import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  book: Book=new Book();
  constructor(private bookService: BookService,
    private router: Router){}
    ngOnInit(): void {
    }
   saveBook(){
    this.bookService['createBook'](this.book).subscribe((data:any)=>{
      console.log(data);
      
    },
    (error:any)=>console.log(error));
   }
   onSubmit()
   {
    console.log(this.book);
    this.saveBook();
 alert("room booked successfully");
   }
   onCancelClick(){
this.router.navigateByUrl('/deleteBook');
   }
   onpaymentClick(){
    this.router.navigateByUrl('/paymant');
    
   }
}
