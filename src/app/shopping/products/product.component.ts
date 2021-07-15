import { Component, OnInit } from '@angular/core';
import { CartService } from '../../server/cart.service';
import { ProductsService } from '../../server/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  CompositeKey(index: any, item: Product): any {
    return item.name + item.price;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Đã thêm sản phẩm vào giỏ hàng');
  }
}
