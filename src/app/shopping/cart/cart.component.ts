import { Component, OnInit } from '@angular/core';
import { CartService } from '../../server/cart.service';
import { Cart } from '../../model/cart';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = this.cartService.cart;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private cartService: CartService) {}

  ngOnInit(): void {}

  navigateToViewCart(): void {
    this._router.navigate(['viewCart']);
  }
}
