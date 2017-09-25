export class Book {
    public title:string;
    public author:string;
    public isbn:string;
    public img:string;   
    public htPrice:number;
}

export const BOOKS:Book[] = [
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
