export interface Order {
    _id?: string,
    client: {
      id: string,
      name: string,
      email: string,
      phone?: string,
    },
    product: {
      id: string,
      name: string,
      salePrice?: number,
      amount?: number,
    },
    address: {
      cep: string,
      road: string,
      number?: number,
      complement?: string,
      neighborhood: string,
      city: string,
      state: string,
    },
    observation?: string,
    shippingDays?: number,
    term?: string,
    totalValue?: number,
    createdAt: string;
}