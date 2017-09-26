import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RangePipe } from './range.pipe';
import { CartComponent } from './cart/cart.component';
import { AuthorPipe } from './author.pipe';
import { CatalogService } from './catalog.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CatalogComponent,
    ContactComponent,
    HomeComponent,
    RangePipe,
    CartComponent,
    AuthorPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([{path:"home", component: HomeComponent},{path:"catalog", component: CatalogComponent},{path:"contact", component: ContactComponent},{path:"cart", component: CartComponent}])
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
