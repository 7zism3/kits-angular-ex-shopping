import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ViewCartComponent } from './shopping/view-cart/view-cart.component';
import { LoginComponent } from './share/login/login.component';
import { SignupComponent } from './share/signup/signup.component';
import { ProductComponent } from './admin/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: 'shopping', component: ShoppingComponent },
  {
    path: 'admin/product',component: ProductComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // },
  { path: 'viewCart', component: ViewCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
