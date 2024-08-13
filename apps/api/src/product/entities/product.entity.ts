import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'products', timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ name: 'sale_price' })
  salePrice: number;
}
