import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderClientDto } from './order-client.dto';
import { OrderProductDto } from './order-product.dto';
import { OrderAddreesDto } from './order-addrees.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @Type(() => OrderClientDto)
  @ValidateNested()
  client: OrderClientDto;

  @Type(() => OrderProductDto)
  @ValidateNested()
  product: OrderProductDto;

  @Type(() => OrderAddreesDto)
  @ValidateNested()
  address: OrderAddreesDto;

  @IsString()
  @IsOptional()
  observation: string;

  @IsInt()
  shippingDays: number;

  @IsDateString()
  term: string;
}
