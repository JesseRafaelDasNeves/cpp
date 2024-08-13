import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsString()
  description: string;

  @IsNumber({ maxDecimalPlaces: 3 })
  @IsPositive()
  @IsNotEmpty()
  salePrice: number;
}
