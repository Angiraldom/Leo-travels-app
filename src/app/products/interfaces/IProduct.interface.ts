import { IModule } from './IModule.interface';

export interface IProduct {
  _id: string;

  name: string;

  description: string;

  price: number;

  isCourse: boolean;

  weight?: number;

  discount?: number;

  status: boolean;

  modules?: IModule[];
}
