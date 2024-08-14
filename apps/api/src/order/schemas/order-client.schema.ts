import { HydratedDocument } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { OrderClient } from '../entities/order-client.entity';

export type OrderClientDocument = HydratedDocument<OrderClient>;
export const OrderClientSchema = SchemaFactory.createForClass(OrderClient);
