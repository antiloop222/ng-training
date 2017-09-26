import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(p_books:Book[], p_min:number, p_max:number): Book[] {
    if(p_books == null) {
      return null;
    }
    let result:Book[] = new Array<Book>();
    let i:number = 0;
    for(i = 0; i < p_books.length; i++) {
      if(p_books[i].htPrice >= p_min && p_books[i].htPrice <= p_max) {
        result.push(p_books[i]);
      }
    }
    return result;
  }
}
