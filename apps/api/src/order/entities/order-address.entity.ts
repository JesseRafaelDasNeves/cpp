import { Prop } from '@nestjs/mongoose';

export class OrderAddrees {
  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  road: string;

  @Prop()
  complement: string;

  @Prop()
  number: string;

  @Prop({ required: true })
  neighborhood: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;
}
