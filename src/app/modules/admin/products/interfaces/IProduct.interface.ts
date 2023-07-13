import { IModule } from "../../courses/interfaces/IModule.interface";

export interface IProduct {
  _id?: string;

  name?: string;

  description?: string;

  price?: number;

  weight?: number;

  discount?: number;

  status?: boolean;

  broad?: number;

  height?: number;

  long?: number;

  updatedAt?: Date;

  createdAt?: Date;

  amount?: number;

  imageProperties?: [{
    key: string;
    url: string;
  }];

  modules?: IModule[];
}
