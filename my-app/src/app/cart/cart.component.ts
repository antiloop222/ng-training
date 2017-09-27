import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Book } from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService:CartService;

  @Input()
  private books:Book[];

  public htTotal:string = null; 
  public ttcTotal:string = null;

  constructor(p_service:CartService) {
    this.cartService = p_service;
  }

  private refresh():void {
    this.cartService.getBooks().then(
      (_books: Book[]) => {
        this.books = _books;
        this.htTotal = this.getHTTotal().toFixed(2);
        this.ttcTotal = this.getTTCTotal().toFixed(2);
      }
    );
  }

  // TODO seems not working
  public removeFromCart(book:Book):void {
    this.cartService.removeBook(book);
    this.refresh();
  }

  public getHTTotal():number {
    let total:number = 0;
    let i:number = 0;
    for(i = 0; i < this.books.length; i++) {
      total += this.books[i].htPrice;  
    }
    return total;
  }

  public getTTCTotal():number {
    return this.getHTTotal() * 1.055;
  }

  ngOnInit() {
    this.refresh();
  }
}
