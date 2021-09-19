import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<getResponse>(this.baseUrl).pipe(
      map(res => res._embedded.products)
    );
  }

}
  interface getResponse {
    _embedded: {
      products: Product[];
    }
  }