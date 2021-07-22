import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShareRoutingModule} from './share-routing.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  providers: [],
  imports: [CommonModule, ShareRoutingModule, BrowserModule],
})
export class ShareModule {
}
