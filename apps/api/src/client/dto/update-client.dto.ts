import { z } from 'zod';
import { AddressSchema } from './address.dto';

export const UpdateClientSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string().optional(),
  address: AddressSchema,
});

export type UpdateClientDto = z.infer<typeof UpdateClientSchema>;
