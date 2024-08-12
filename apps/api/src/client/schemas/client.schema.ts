import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressSchema } from './address.schema';
import { Client } from '../entities/client.entity';

export type ClientDocument = HydratedDocument<ClientSchema>;

@Schema({ collection: 'clients', timestamps: true })
export class ClientSchema implements Client {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: AddressSchema;
}

export const ClientSchemaFactory = SchemaFactory.createForClass(ClientSchema);
