import { IsNotEmpty, IsString } from 'class-validator';

export class OrderAddreesDto {
  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  road: string;

  @IsString()
  complement: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}
