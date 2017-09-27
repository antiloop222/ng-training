import { Book } from "./book";

export class Cart {
    public books:Book[] = new Array<Book>();

    constructor() { }

    public addBook(p_book:Book):void {
        this.books.push(p_book);
    }

    public removeBook(p_book:Book):void {
        this.books = this.books.filter(
            (_book:Book) => {
                return !(_book.isbn === p_book.isbn);
            }
        );
    }

    public setBooks(p_books:Book[]):void {
        this.books = p_books;
    }

    public getBooks():Book[] {
        return this.books;
    }
}
