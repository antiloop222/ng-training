import { Component, OnInit, Input } from '@angular/core';
import { Catalog, CATALOG } from '../catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  public catalogVO:Catalog = null;

  public min:number = 0;
  public max:number = 1000;

  public firstLetter:string = "A";
  public secondLetter:string = "Z";

  constructor() {
    this.catalogVO = new Catalog(128);
    this.catalogVO.addBook(CATALOG[0]);
    this.catalogVO.addBook(CATALOG[1]);
    this.catalogVO.addBook(CATALOG[2]);
  }

  ngOnInit() {
  }

}
