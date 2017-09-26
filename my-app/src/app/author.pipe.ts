import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(p_books:Book[], p_firstLetter:string, p_secondLetter:string): Book[] {
    if(p_books == null) {
      return null;
    }
    return p_books.filter((_book:Book) => (
      _book.author.toUpperCase().charCodeAt(0) >= p_firstLetter.toUpperCase().charCodeAt(0) && 
      _book.author.toUpperCase().charCodeAt(0) <= p_secondLetter.toUpperCase().charCodeAt(0)
    ));
  }
}
