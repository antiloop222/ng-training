import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BookDetailsComponent } from './book-details.component';
import { CatalogService } from '../catalog.service';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Rx';


describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let route: ActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        CatalogService,
        {provide: ActivatedRoute, useValue : { params: Observable.of({isbn:"0172-4976"}) }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
// detect changes in async as the component uses Promise
//    fixture.detectChanges();
  });

  it('should create', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
