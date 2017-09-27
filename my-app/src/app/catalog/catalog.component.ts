import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from '../catalog';
import { CatalogService } from '../catalog.service';
import { Book } from '../book';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  public books:Book[] = new Array<Book>();

  private catalogService:CatalogService;
  private cartService:CartService;

  public min:number = 0;
  public max:number = 1000;
  public firstLetter:string = "A";
  public secondLetter:string = "Z";

  constructor(p_catalogService:CatalogService, p_cartService:CartService) {
    this.catalogService = p_catalogService;
    this.cartService = p_cartService;
  }

  public cartHandler(p_book:Book):void {
    this.cartService.addBook(p_book);
  }

  ngOnInit() {
    // data provided by services should be used only here and not in constructor
    let _books:Book[];
    this.catalogService.getCatalog().then(
      (_books:Book[]) => {
        this.books = _books;
      }
    );
  }
}
