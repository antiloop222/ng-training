import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  private service:CatalogService;

  @Input()
  public bookVO:Book;
  
  constructor(p_service:CatalogService) {
    this.service = p_service;
  }

  ngOnInit() {
    this.bookVO = this.service.getBookByISBN("0172-4976"); 
  }

}
