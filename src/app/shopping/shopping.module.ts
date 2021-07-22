import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/product.component';
import { CartComponent } from './cart/cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    ShoppingComponent,
    ProductsComponent,
    CartComponent,
    ViewCartComponent,
  ],
  imports: [CommonModule, ShoppingRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule ],
})
export class ShoppingModule {}
