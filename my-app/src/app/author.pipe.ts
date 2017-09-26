import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(p_books:Book[], p_firstLetter:string, p_secondLetter:string): Book[] {
    return p_books.filter((book) => (book.author.charCodeAt(0) >= p_firstLetter.charCodeAt(0) && book.author.charCodeAt(0) <= p_secondLetter.charCodeAt(0)));
  }
}
