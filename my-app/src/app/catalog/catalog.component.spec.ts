import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { RangePipe } from '../range.pipe';
import { AuthorPipe } from '../author.pipe';
import { BookComponent } from '../book/book.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { CatalogService } from '../catalog.service';
import { HttpModule } from '@angular/http';
import { CartService } from '../cart.service';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CatalogComponent,
        BookComponent,
        BookDetailsComponent,
        RangePipe,
        AuthorPipe
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
          {path:"details/:isbn", component: BookDetailsComponent}
        ])
      ],
      providers: [
        CatalogService,
        CartService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
