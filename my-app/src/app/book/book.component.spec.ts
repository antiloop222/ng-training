import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookComponent,
        BookDetailsComponent
      ],
      imports: [
        RouterModule.forRoot([
          {path:"details/:isbn", component: BookDetailsComponent}
        ])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }       
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
