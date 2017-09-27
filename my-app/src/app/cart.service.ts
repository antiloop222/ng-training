import { Injectable } from '@angular/core';
import { Book } from './book';
import { Cart } from './cart';

@Injectable()
export class CartService {

  private cart:Cart = new Cart();

  constructor() { }

  public addBook(book:Book):void {
    this.cart.addBook(book);
  }

  public removeBook(book:Book):void {
    this.cart.removeBook(book);
  }

  public getBookByISBN(isbn:string):Promise<Book> {
    return Promise.resolve(this.cart.getBooks().find(
      (_book:Book) => {
        return _book.isbn === isbn;
      }
    ));
  }

  public getBooks():Promise<Book[]> {
    return Promise.resolve(this.cart.getBooks());
  }

// CartComponent
// BouquinA price boutton(supprimer)
// BouquinB price boutton(supprimer)
//          total HT
//          total TTC

}
