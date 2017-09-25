import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public data:Book = null;

  constructor() {
// default values overriden by app-book elements
//    this.title = "title";
//    this.author = "author";
//    this.isbn = "1234";
//    this.img = "book";
//    this.htPrice = 14.90;
  }

  ngOnInit() {
  }

}
