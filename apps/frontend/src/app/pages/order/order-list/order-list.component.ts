import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  
  orders: Order[] = [];

  constructor(private readonly service: OrderService, private readonly datePipe: DatePipe) {}

  ngOnInit(): void {
    this.service.list().subscribe((ordersApi) => {
      this.orders = ordersApi;
    });
  } 

  dateOrderInFull(date: string) {
    let oData = new Date(date);
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  }
}
