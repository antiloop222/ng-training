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
  public catalogVO:Catalog = new Catalog();

  private booksVO:Book[];

  private service:CatalogService;

  public min:number = 0;
  public max:number = 1000;

  public firstLetter:string = "A";
  public secondLetter:string = "Z";

  constructor(p_service:CatalogService) {
    this.service = p_service;
  }

  ngOnInit() {
    // data provided by services should be used only here and not in constructor
    let _books:Book[];
    this.service.getCatalog().then(
      (books:Book[]) => { this.booksVO = books; }
    );
    this.catalogVO.setBooks(this.booksVO);
  }
}
