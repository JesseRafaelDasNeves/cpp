import { Prop, Schema } from '@nestjs/mongoose';
import { OrderClient } from './order-client.entity';
import { OrderProduct } from './order-product.entity';
import { OrderAddrees } from './order-address.entity';

@Schema({ collection: 'orders', timestamps: true })
export class Order {
  @Prop({ required: true })
  client: OrderClient;

  @Prop({ required: true })
  product: OrderProduct;

  @Prop({ required: true })
  address: OrderAddrees;

  @Prop()
  observation: string;

  @Prop({ name: 'shipping_days' })
  shippingDays: number;

  @Prop()
  term: Date;

  @Prop({ name: 'total_value', required: true })
  totalValue: number;
}
