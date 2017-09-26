import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatalogService {

  private service:Http;

  constructor(p_service:Http) {
    this.service = p_service;
  }

  private CATALOG:Book[] = [
    {
      title: "Harry Potter Tome I",
      author: "Rowling, J.K.",
      isbn: "0172-4976",
      img: "harry_ecole.jpg",
      htPrice: 14.90,
      description: "description"
    },
    {
      title: "Harry Potter Tome II",
      author: "Rowling, J.K.",
      isbn: "8340-6122",
      img: "harry_prisonnier.jpg",
      htPrice: 19.90,
      description: "description"
    },
    {
      title: "Dune Tome I",
      author: "Herbert, Frank",
      isbn: "1916-2765",
      img: "dune.jpg",
      htPrice: 9.90,
      description: "description"
    },
    {
      title: "Le seigneur des anneaux",
      author: "Tolkien, J.R.R.",
      isbn: "8473-1104",
      img: "anneaux.jpg",
      htPrice: 21.90,
      description: "description"
    }
  ];

  public getCatalog():Promise<Book[]> {
    //  return this.CATALOG;
    let url:string = "/assets/data/catalog.json";
    let promiseA:Promise<any> = this.service.get(url).toPromise();
    let promiseB:Promise<Book[]> = promiseA.then(
      (response) => { return response.json().catalog as Book[]; }
    );
    return promiseB.catch(this.errorHandler);
  }

  public getBookByISBN(isbn:string):Promise<Book> {
    return this.getCatalog().then(
      (books:Book[]) => (books.find((book) => (book.isbn == isbn)))
    );
  }

  private errorHandler(error:any) {
    return Promise.reject(error);
  }
}
