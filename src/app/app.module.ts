import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { ProductItemComponent } from './shop/products/product-item/product-item.component';
import { ProductDetailsComponent } from './shop/products/product-details/product-details.component';
import { AuthenticationService } from './Authentication.service';
import { ProductsService } from './products.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuradService } from './AuthGuradService.service';
import { CartService } from './Cart.service';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataSourcesService } from './dataSrcs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    AuthenticationComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [
    ProductsService,
    AuthenticationService,
    AuthGuradService,
    CartService,
    DataSourcesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
