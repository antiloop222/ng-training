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

  constructor(p_service:CartService) {
    this.cartService = p_service;
  }

  ngOnInit() {
    this.cartService.getBooks().then(
      (_books:Book[]) => {
        this.books = _books;
      }
    )
  }
}
