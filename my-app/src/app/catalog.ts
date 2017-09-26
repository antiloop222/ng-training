import { Book } from "./book";

export class Catalog {
    public books:Book[] = null;
    public nBooks:number = 0;
    public maxBooks:number = 0;

    constructor(p_maxbooks:number) {
        this.maxBooks = p_maxbooks;
        this.books = new Array();
    }

    public addBook(p_book:Book):void {
        this.books[this.nBooks] = p_book;
        this.nBooks++; 
    }
}

export const CATALOG:Book[] = [
    {
        title: "Harry Potter Tome I",
        author: "J.K. Rowling",
        isbn: "1234",
        img: "harry_ecole.jpg",
        htPrice: 14.90
    },
    {
        title: "Harry Potter Tome II",
        author: "J.K. Rowling",
        isbn: "1234",
        img: "harry_prisonnier.jpg",
        htPrice: 19.90
    }
];