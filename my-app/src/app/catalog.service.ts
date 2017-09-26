import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class CatalogService {

  constructor() { }

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

public getCatalog():Book[] {
  return this.CATALOG;
}
public getBookByISBN(isbn:string):Book {
    return this.getCatalog().find((book) => (book.isbn == isbn));
  }
}
