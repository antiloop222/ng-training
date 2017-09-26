import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(p_books:Book[], p_firstLetter:string, p_secondLetter:string): Book[] {
    return p_books.filter((book) => (
      book.author.toUpperCase().charCodeAt(0) >= p_firstLetter.toUpperCase().charCodeAt(0) && 
      book.author.toUpperCase().charCodeAt(0) <= p_secondLetter.toUpperCase().charCodeAt(0)
    ));
  }
}
