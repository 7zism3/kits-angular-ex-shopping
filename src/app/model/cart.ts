import { Item } from './item';
import { Product } from './product';

export class Cart {
  items: Item[] = [];
  total!: number;

  addToCart(product: Product): void {
    const itemAdd = this.items.find((item) => item.product.id === product.id);

    if (itemAdd != null) {
      itemAdd.quantity += 1;
    } else {
      this.items.push(new Item(product));
    }

    this.reTotal();

    console.log(this.total);
  }

  getItems(): Item[] {
    return this.items;
  }

  reTotal(): void {
    this.total = 0;
    this.items.forEach((item) => {
      this.total += +item.quantity * item.product.price;
    });
  }

  clearCart(): void {
    this.items = [];
  }

  isEmpty(): boolean {
    if (this.items.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  deleteItem(item: Item): void {
    const index = this.items.findIndex(
      // tslint:disable-next-line: variable-name
      (item_temp) => item_temp.product.id === item.product.id
    );
    this.items.splice(index, 1);
  }
}
