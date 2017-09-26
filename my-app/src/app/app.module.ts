import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RangePipe } from './range.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CatalogComponent,
    ContactComponent,
    HomeComponent,
    RangePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"home", component: HomeComponent},{path:"catalog", component: CatalogComponent},{path:"contact", component: ContactComponent},{path:"cart", component: CartComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
