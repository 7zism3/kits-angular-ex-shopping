import { Product } from './product';
export class Item {
  product: Product = new Product();
  quantity!: number;

  get itemTotal(): number {
    return this.quantity * this.product.price;
  }

  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
  }
}
