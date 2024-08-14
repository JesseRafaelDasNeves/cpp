import { Prop } from '@nestjs/mongoose';

export class OrderProduct {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ name: 'sale_price' })
  salePrice: number;

  @Prop({ required: true })
  amount: number;
}
