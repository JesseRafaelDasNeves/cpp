import { z } from 'zod';
import { AddressDto, AddressSchema } from './address.dto';

export const CreateClientSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string().optional(),
  address: AddressSchema,
});

//export type CreateClientDto = z.infer<typeof CreateClientSchema>;

export class CreateClientDto {
  name: string;
  email: string;
  phone: string;
  address: AddressDto;
}
