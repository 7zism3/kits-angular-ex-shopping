import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/product.component';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [ShoppingComponent, ProductsComponent, CartComponent, ViewCartComponent, ],
  imports: [BrowserModule, CommonModule],
})
export class ShoppingModule {}
