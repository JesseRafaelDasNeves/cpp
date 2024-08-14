import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderProductDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 3 })
  @IsNotEmpty()
  salePrice: number;

  @IsInt()
  @IsNotEmpty()
  amount: number;
}
