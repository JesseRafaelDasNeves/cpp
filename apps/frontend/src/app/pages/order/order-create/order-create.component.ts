import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../client/client.service';
import { ProductService } from '../../product/product.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent implements OnInit {
  formOrder!: FormGroup;
  buttonSaveTouched = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly clientService: ClientService,
    private readonly productService: ProductService,
    private readonly orderService: OrderService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.formOrder = this.formBuilder.group({
      client: this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        phone: [
          '',
          Validators.compose([Validators.required])
        ],
      }),
      address: this.formBuilder.group({
        cep: ['', Validators.compose([Validators.required])],
        road: ['', Validators.compose([Validators.required])],
        number: ['', Validators.compose([Validators.required])],
        complement: [''],
        neighborhood: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
      }),
      product: this.formBuilder.group({
        name: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        salePrice: ['', Validators.compose([Validators.required])],
        amount: ['', Validators.compose([Validators.required])],
      }),
      observation: [''],
      shippingDays: [''],
      term: [''],
    });
  }

  createOrder() {
    this.buttonSaveTouched = true
    if (this.formOrder.valid) {
      const order = this.formOrder.value;
      const clientN = order.client;
      clientN.address = order.address;
      this.clientService.create(order.client).subscribe((client) => {
        this.productService.create(order.product).subscribe((product) => {
          order.client.id = client.id;
          order.product.id = product._id;
          this.orderService.create(order).subscribe((orderNew) => {
            alert("Pedido Criado!");
            this.router.navigate(['/order']);
          })
        })
      });
    } else {
      console.log('Formulário invalido!');
    }
  }
}
