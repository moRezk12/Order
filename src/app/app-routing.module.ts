import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionMoreComponent } from './components/section-more/section-more.component';
import { HomeAndSectionComponent } from './components/home-and-section/home-and-section.component';
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

const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full"},
  {path : "home" , component : HomeComponent},
  {path : "section", component : SectionMoreComponent},
  {path : "homeAndSection", component : HomeAndSectionComponent},
  {path : "confirmOrder", component : ConfirmOrderComponent},
  {path : "phoneNumber", component : PhoneNumberComponent},
  {path : "codeNumber", component : CodeNumberComponent},
  {path : "completeData", component : CompleteDataComponent},
  {path : "confirmAddress", component : ConfirmAddressComponent},
  {path : "protfolio", component : ProtfolioComponent},
  {path : "talabatBack", component : TalabatBackComponent},
  {path : "discountCodes", component : DiscountcodesComponent},
  {path : "favoriteProducts", component : FavoriteProductsComponent},
  {path : "previousavoriteProducts", component : PreviousFavoriteProductsComponent},
  {path : "productOnBasket", component : ProductOnBasketComponent },
  {path : "paymentSteps", component : PaymentStepsComponent },
  {path : "location", component : LocationComponent },
  {path : "splash", component : SplashComponent },
  {path : "startShopping", component : StartShoppingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
