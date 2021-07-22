import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ViewCartComponent } from './shopping/view-cart/view-cart.component';
import { LoginComponent } from './share/login/login.component';
import { SignupComponent } from './share/signup/signup.component';
import { ProductComponent } from './admin/product/product.component';
import {ShoppingRoutingModule} from './shopping/shopping-routing.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {ShareRoutingModule} from './share/share-routing.module';


const routes: Routes = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  // { path: 'shopping', component: ShoppingComponent },
  // {
  //   path: 'admin/products',component: ProductComponent
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  //
  // { path: 'viewCart', component: ViewCartComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ShoppingRoutingModule, AdminRoutingModule, ShareRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
