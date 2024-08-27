import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionMoreComponent } from './components/section-more/section-more.component';
import { HomeAndSectionComponent } from './components/home-and-section/home-and-section.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { CodeNumberComponent } from './components/code-number/code-number.component';
import { CompleteDataComponent } from './components/complete-data/complete-data.component';
import { ConfirmAddressComponent } from './components/confirm-address/confirm-address.component';
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { TalabatBackComponent } from './components/talabat-back/talabat-back.component';
import { DiscountcodesComponent } from './components/discountcodes/discountcodes.component';
import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { PreviousFavoriteProductsComponent } from './components/previous-favorite-products/previous-favorite-products.component';
import { ProductOnBasketComponent } from './components/product-on-basket/product-on-basket.component';
import { PaymentStepsComponent } from './components/payment-steps/payment-steps.component';
import { LocationComponent } from './components/location/location.component';
import { SplashComponent } from './components/splash/splash.component';
import { StartShoppingComponent } from './components/start-shopping/start-shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionMoreComponent,
    HomeAndSectionComponent,
    ConfirmOrderComponent,
    PhoneNumberComponent,
    CodeNumberComponent,
    CompleteDataComponent,
    ConfirmAddressComponent,
    ProtfolioComponent,
    TalabatBackComponent,
    DiscountcodesComponent,
    FavoriteProductsComponent,
    PreviousFavoriteProductsComponent,
    ProductOnBasketComponent,
    PaymentStepsComponent,
    LocationComponent,
    SplashComponent,
    StartShoppingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
