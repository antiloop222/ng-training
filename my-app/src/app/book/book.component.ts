import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public bookVO:Book = null;

  @Output()
  public onCart:EventEmitter<Book> = null;

  constructor() {
// default values overriden by app-book elements
//    this.title = "title";
//    this.author = "author";
//    this.isbn = "1234";
//    this.img = "book";
//    this.htPrice = 14.90;
    this.onCart = new EventEmitter<Book>();
  }

  public clickHandler(p_obj:any):void {
    // traitement avant ajout au panier
    // alert("Add to cart");
    this.onCart.emit(this.bookVO);
  }

  ngOnInit() {
  }
}
