import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../server/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cart = this.cartService.cart;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private cartService: CartService) {}

  ngOnInit(): void {}

  navigateToShopping(): void {
    this._router.navigate(['shopping']);
  }

  deleteItem(item: Item): void {
     this.cartService.deleteItem(item);
  }

  updateQuantityItem(item: Item, newQuatity: number): void {
    this.cartService.updateQuantityItem(item, newQuatity);
  }
}
