import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  // injected by router module (imported)
  private route:ActivatedRoute;

  // injected because declared in application providers
  private service:CatalogService;

  @Input()
  public book:Book;
  
  constructor(p_service:CatalogService, p_route:ActivatedRoute) {
    this.service = p_service;
    this.route = p_route;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (_params:any) => {
        this.service.getBookByISBN(_params.isbn).then(
          (_book:Book) => {
            this.book = _book;
          }
        ) 
      }
    );
  }
}
