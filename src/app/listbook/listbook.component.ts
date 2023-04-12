import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit{
  books!:Book[];
  constructor(private bookService:BookService,private router:Router){
  
  }
    ngOnInit(): void {
      this.getBooks();
    }
      private getBooks(){
        this.bookService.getBooksList().subscribe(data =>{
          this.books =data;
        });
      }
      BookDetails(bookingId:number)
      {
        this.router.navigate(['view-book',bookingId]);
      }
      
     deleteBook(bookingId:number)
      {
        this.bookService.deleteBook(bookingId).subscribe(data =>
          {
            console.log(data);
            this.getBooks();
            alert("cancelled successfully");
          })

}
}
