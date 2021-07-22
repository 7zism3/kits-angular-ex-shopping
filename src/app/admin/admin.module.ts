import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [ProductComponent, OrderComponent],
  providers: [],
  imports: [CommonModule, AdminRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {
}
