import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catalog } from '../catalog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  public catalog:Catalog = null;

  @Output()
  public onCart:EventEmitter<Catalog> = null;

  constructor() { }

  public clickHandler(p_obj:any):void {
    // traitement avant ajout au panier
    // alert("Add to cart");
    this.onCart.emit(this.catalog);
  }

  ngOnInit() {
  }

}
