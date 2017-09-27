import { Book } from "./book";

export class Catalog {
    public books:Book[] = new Array<Book>();

    constructor() { }

    public addBook(p_book:Book):void {
        this.books.push(p_book);
    }

    public setBooks(p_books:Book[]):void {
        this.books = p_books;
    }
}
