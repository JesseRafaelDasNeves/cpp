import { z } from 'zod';

export const AddressSchema = z
  .object({
    cep: z.string().length(9),
    road: z.string(),
    number: z.string(),
    complement: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string().length(2),
  })
  .required();

//export type AddressDto = z.infer<typeof AddressSchema>;

export class AddressDto {
  cep: string;
  road: string;
  complement: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}
