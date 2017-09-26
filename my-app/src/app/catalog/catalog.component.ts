import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from '../catalog';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  public catalogVO:Catalog = new Catalog();

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
    this.catalogVO.setBooks(this.service.getCatalog());
  }

}
