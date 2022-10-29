import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { ProductItemComponent } from './shop/products/product-item/product-item.component';
import { ProductDetailsComponent } from './shop/products/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FixedPipe } from './shared/pipes/fixed.pipe';
import { AlertComponent } from './cart/alert/alert.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HTTPEffectsReducer } from './shop/http-effects-store/http-effects.reducer';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';
import { SalePipe } from './shared/pipes/sale-price.pipe';
import { SaleReducer } from './cart/Sale-Store/Sale.reducer';

@NgModule({
  declarations: [
    SalePipe,
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
    FooterComponent,
    FilterPipe,
    FixedPipe,
    AlertComponent,
    SpinnerComponent,
    AlertMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      HttpEffects: HTTPEffectsReducer,
      SaleReducer: SaleReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
