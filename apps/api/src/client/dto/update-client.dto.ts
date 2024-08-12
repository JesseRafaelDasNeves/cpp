import { z } from 'zod';
import { AddressDto, AddressSchema } from './address.dto';

export const UpdateClientSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string().optional(),
  address: AddressSchema,
});

//export type UpdateClientDto = z.infer<typeof UpdateClientSchema>;

export class UpdateClientDto {
  name: string;
  email: string;
  phone: string;
  address: AddressDto;
}
