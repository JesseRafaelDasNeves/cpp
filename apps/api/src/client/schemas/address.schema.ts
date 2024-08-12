import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AddressDocument = HydratedDocument<AddressSchema>;

export class AddressSchema {
  @Prop()
  cep: string;

  @Prop()
  road: string;

  @Prop()
  complement: string;

  @Prop()
  number: string;

  @Prop()
  neighborhood: string;

  @Prop()
  city: string;

  @Prop()
  state: string;
}

export const AddressSchemaFactory = SchemaFactory.createForClass(AddressSchema);
