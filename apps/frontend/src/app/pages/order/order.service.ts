import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private URL_API = 'http://localhost:3000/order';

  constructor(private readonly http: HttpClient) {}

  list(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL_API);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.URL_API, order);
  }
}
