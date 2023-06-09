import { IModule } from "../../courses/interfaces/IModule.interface";

export interface IProduct {
  _id?: string;
  id?: string;
  name?: string;
  description?: string;

  price?: number;

  weight?: number;

  discount?: number;

  status?: boolean;

  broad?: number;

  height?: number;

  long?: number;

  images: string[];

  updatedAt?: Date;

  createdAt?: Date;

  amount?: number;
  
  title?: string;

  imageProperties?: [];

  modules?: IModule[];
}
