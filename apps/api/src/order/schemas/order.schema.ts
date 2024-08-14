import { HydratedDocument } from 'mongoose';
import { Order } from '../entities/order.entity';
import { SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = HydratedDocument<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
