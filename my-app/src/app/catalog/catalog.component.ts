import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from '../catalog';
import { CatalogService } from '../catalog.service';
import { Book } from '../book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  public catalog:Catalog = new Catalog();

  private catalogService:CatalogService;

  public min:number = 0;
  public max:number = 1000;
  public firstLetter:string = "A";
  public secondLetter:string = "Z";

  constructor(p_service:CatalogService) {
    this.catalogService = p_service;
  }

  public cartHandler(p_book:Book):void {
    console.log(p_book);
  }

  ngOnInit() {
    // data provided by services should be used only here and not in constructor
    let _books:Book[];
    this.catalogService.getCatalog().then(
      (_books:Book[]) => {
        this.catalog.setBooks(_books);
      }
    );
  }
}
