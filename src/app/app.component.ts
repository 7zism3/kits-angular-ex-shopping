import {Component, OnInit} from '@angular/core';
import {ProductsService} from './server/products.service';
import {CartService} from './server/cart.service';
import {AuthenticationService} from './server/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ex-shopping';

  ngOnInit(): void {

  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  checkLogin(): boolean {
    if (this.authService.getToken() !== null) {
      return true;
    }
    return false;

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
