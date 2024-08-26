import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
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
  @IsOptional()
  description: string;

  @IsNumber({ maxDecimalPlaces: 3 })
  @IsPositive()
  @IsNotEmpty()
  salePrice: number;
}
