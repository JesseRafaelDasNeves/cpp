import { HydratedDocument } from 'mongoose';
import { OrderAddrees } from '../entities/order-address.entity';
import { SchemaFactory } from '@nestjs/mongoose';

export type OrderAddressDocument = HydratedDocument<OrderAddrees>;
export const OrderAddressSchema = SchemaFactory.createForClass(OrderAddrees);
