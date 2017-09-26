import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public book:Book = null;

  @Output()
  public onCart:EventEmitter<Book> = null;

  constructor() {
    this.onCart = new EventEmitter<Book>();
  }

  public clickHandler(p_obj:any):void {
    this.onCart.emit(this.book);
  }

  ngOnInit() {
  }
}
