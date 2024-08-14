import { HydratedDocument } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { OrderProduct } from '../entities/order-product.entity';

export type OrderProductDocument = HydratedDocument<OrderProduct>;
export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
