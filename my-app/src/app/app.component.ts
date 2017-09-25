import { Component } from '@angular/core';
import { Book, BOOKS } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string  = 'eBay';
  public books:Book[] = null;

  constructor() {
    this.books = BOOKS; 
  }
}
