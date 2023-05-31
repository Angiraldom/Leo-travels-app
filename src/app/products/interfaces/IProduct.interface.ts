export interface IProduct {
  _id: string;

  name: string;

  description: string;

  price: number;

  weight?: number;

  discount?: number;

  status: boolean;
}
