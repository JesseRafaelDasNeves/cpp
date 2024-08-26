import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_API = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL_API, product);
  }
}
