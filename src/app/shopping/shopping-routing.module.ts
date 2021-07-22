import {ShoppingComponent} from './shopping/shopping.component';
import {ViewCartComponent} from './view-cart/view-cart.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'shopping1', pathMatch: 'full' },
  { path: 'shopping', component:  ShoppingComponent},
  { path: 'view-cart', component: ViewCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
