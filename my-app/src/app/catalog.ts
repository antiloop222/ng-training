import { Book } from "./book";

export class Catalog {
    public books:Book[] = null;
    public nBooks:number = 0;

    constructor() {
        this.books = new Array();
    }

    public addBook(p_book:Book):void {
        this.books[this.nBooks] = p_book;
        this.nBooks++; 
    }

    public setBooks(p_books:Book[]):void {
        this.books = p_books;
        if(p_books != null) {
            this.nBooks = p_books.length;
        }
    }
}
