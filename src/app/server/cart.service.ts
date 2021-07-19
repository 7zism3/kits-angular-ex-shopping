import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = new Cart();

  constructor() {}

  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }

  getCart(): Cart {
    return this.cart;
  }

  deleteItem(item: Item): void {
    this.cart.deleteItem(item);
  }

  updateQuantityItem(item: Item, newQuatity: number): void {
    item.quantity = newQuatity;
    this.cart.reTotal();
  }
}
