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

    public setBooks(p_books:Book[]):void {
        this.books = p_books;
        this.nBooks = p_books.length;
    }
}