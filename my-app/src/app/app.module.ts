import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RangePipe } from './range.pipe';
import { CartComponent } from './cart/cart.component';
import { AuthorPipe } from './author.pipe';
import { CatalogService } from './catalog.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartService } from './cart.service';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './auth.service';

import { PaymentGuard } from './payment.guard';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    CartComponent,
    CatalogComponent,
    ContactComponent,
    HomeComponent,
    PaymentComponent,
    AuthComponent,
    MenuComponent,
    RangePipe,
    AuthorPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"home", component: HomeComponent},
      {path:"catalog", component: CatalogComponent},
      {path:"contact", component: ContactComponent},
      {path:"cart", component: CartComponent},
      {path:"payment", component: PaymentComponent, canActivate: [PaymentGuard]},
      {path:"auth", component: AuthComponent, canActivate: [AuthGuard]},
      {path:"details/:isbn", component: BookDetailsComponent}
    ])
  ],
  providers: [CatalogService,CartService,AuthService,PaymentGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
