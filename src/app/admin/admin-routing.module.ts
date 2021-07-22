import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
