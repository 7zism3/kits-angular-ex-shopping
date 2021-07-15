import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  total = 0;
  constructor() {}

  addToCart(product: Product): void {
    this.items.push(product);

    this.total += +product.price;

    console.log(this.total);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotal(): number {
    return this.total;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
