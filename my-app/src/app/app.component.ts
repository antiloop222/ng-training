import { Component } from '@angular/core';
import { Book } from './book';
import { Catalog } from './catalog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string  = 'eBay';

  constructor() {
  }

  public cartHandler(p_book:Book):void {
    console.log(p_book);
  }
}
