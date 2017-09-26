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
  public bookVO:Book;
  
  constructor(p_service:CatalogService, p_route:ActivatedRoute) {
    this.service = p_service;
    this.route = p_route;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.service.getBookByISBN(params.isbn).then(
          (book:Book) => ( this.bookVO = book )
        )
      }
    );
  }
}
