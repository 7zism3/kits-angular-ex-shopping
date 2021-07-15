import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {
    this.baseURL = this.baseURL + 'products';
  }

  baseURL: string = 'https://60cd9e2591cc8e00178dbb09.mockapi.io/api/';
  product: Product[] = [];

  public getProducts(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(this.baseURL + `/${id}`);
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.baseURL, product);
  }

  public updateProducte(product: Product): Observable<any> {
    return this.http.put<any>(this.baseURL + `/${product.id}`, product);
  }

  public searchProductByName(name: string): Observable<any> {
    return this.http.get<Product[]>(this.baseURL + `?title=${name}`);
  }

  public sortTitle(abc: string, order: string): Observable<any> {
    return this.http.get<Product[]>(
      this.baseURL + `?sortBy=${abc}&order=${order}`
    );
  }
}
