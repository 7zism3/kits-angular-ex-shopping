import { ProductsService } from './../../server/products.service';
import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productAdd: Product = new Product();
  title: string = '';
  order: string = 'desc';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  get itemNum() {
    return this.products.length;
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // CompositeKey(index: any, item: Product) {
  //   return item.title + item.director;
  // }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe(
      (data) => {
        const iproduct = this.products.indexOf(data);
        this.products.splice(iproduct, 1);
        alert('Xoá thành công');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit (product: Product): void {
    this.productAdd = product;
  }

  addProduct(): void {
    this.productsService.addProduct(this.productAdd).subscribe(
      (data) => {
        alert('Thêm thành công');
        this.getProducts();
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.productAdd = new Product();
      }
    );
  }

  updateProduct(): void {
    this.productsService.updateProduct(this.productAdd).subscribe(
      (data) => {
        alert('Cập nhật thành công');
        this.getProducts();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchByName() {
    this.productsService.searchProductByName(this.title).subscribe(
      (data) => {
        console.log(data);
        if (data.length !== 0) {
          this.products = data;
        } else {
          alert('Không tìm thấy');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sortTitle(title: string): void {
    if (this.order === 'desc') {
      this.order = 'asc';
    } else {
      this.order = 'desc';
    }
    this.productsService.sortTitle(title, this.order).subscribe((data) => {
      this.products = data;
    });
  }
}
