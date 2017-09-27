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
  public onCart:EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  public clickHandler(p_obj:any):void {
    this.onCart.emit(this.book);
  }

  ngOnInit() {
  }
}
