import { ICoupon } from "../../coupons/interfaces/ICoupon.interface";
import { IModule } from "./IModule.interface";

export interface ICourse {
  _id: string;

  name: string;

  description: string;

  price: number;

  status: boolean;

  modules: IModule[];

  portada: string;

  discount?: number;

  coupon?: ICoupon;
}
