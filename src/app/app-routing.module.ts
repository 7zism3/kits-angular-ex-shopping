import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ViewCartComponent } from './shopping/view-cart/view-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'viewCart', component: ViewCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
