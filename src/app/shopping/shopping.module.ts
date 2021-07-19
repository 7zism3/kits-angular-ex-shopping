import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/product.component';
import { CartComponent } from './cart/cart.component';
// import { BrowserModule } from '@angular/platform-browser';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingComponent,
    ProductsComponent,
    CartComponent,
    ViewCartComponent,
  ],
  imports: [CommonModule, ShoppingRoutingModule, FormsModule],
})
export class ShoppingModule {}
