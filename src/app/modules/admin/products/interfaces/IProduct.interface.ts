import { ICoupon } from "../../coupons/interfaces/ICoupon.interface";
import { IModule } from "../../courses/interfaces/IModule.interface";

export interface IProduct {
  _id?: string;

  name?: string;

  description?: string;

  price?: number;

  weight?: number;

  discount?: number;

  coupon?: ICoupon;

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
