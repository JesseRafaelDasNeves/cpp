export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  descriptionAddress?: string;
  address?: {
    cep: string;
    road: string;
    complement?: string;
    number?: string;
    neighborhood: string;
    city: string;
    state: string;
  }
}
