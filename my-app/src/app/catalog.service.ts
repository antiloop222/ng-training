import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class CatalogService {

  constructor() { }

  private CATALOG:Book[] = [
    {
        title: "Harry Potter Tome I",
        author: "J.K. Rowling",
        isbn: "0172-4976",
        img: "harry_ecole.jpg",
        htPrice: 14.90
    },
    {
        title: "Harry Potter Tome II",
        author: "J.K. Rowling",
        isbn: "8340-6122",
        img: "harry_prisonnier.jpg",
        htPrice: 19.90
    },
    {
        title: "Dune Tome I",
        author: "Frank Herbert",
        isbn: "1916-2765",
        img: "dune.jpg",
        htPrice: 9.90
    }
];

  public getBookByISBN(isbn:string):Book {
    return this.CATALOG[0];
  }

  public getCatalog():Book[] {
    return this.CATALOG;
  }
}
