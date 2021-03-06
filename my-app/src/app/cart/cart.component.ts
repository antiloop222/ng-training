import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Book } from '../book';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService:CartService;
  private authService:AuthService;
  private router:Router;

  @Input()
  private books:Book[];

  public htTotal:string = null; 
  public ttcTotal:string = null;

  constructor(p_cartService:CartService, p_authService:AuthService, p_router:Router) {
    this.cartService = p_cartService;
    this.authService = p_authService;
    this.router = p_router;
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

  public buy():void {
    console.log("Buy");
    this.authService.isAuthenticated().then(
      (authenticated:boolean) => {
        if(authenticated) {
          console.log("payment");
          this.router.navigate(["payment"]);
        } else {
          console.log("auth");
          this.router.navigate(["auth"]);
        }
      }
    );
  }    

  ngOnInit() {
    this.refresh();
  }
}
