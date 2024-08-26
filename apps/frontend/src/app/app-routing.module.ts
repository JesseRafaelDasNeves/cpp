import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './pages/client/client-list/client-list.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { OrderCreateComponent } from './pages/order/order-create/order-create.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientListComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'order',
    component: OrderListComponent
  },
  {
    path: 'order/create',
    component: OrderCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
