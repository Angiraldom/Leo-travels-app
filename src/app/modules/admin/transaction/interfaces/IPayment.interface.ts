import { IProduct } from "../../products/interfaces/IProduct.interface";
import { IEpayco } from "./IEpayco.interface";
import { IWompi } from "./IWompi.interface";

type GATEWAY_TYPE = 'epayco' | 'wompy';

export interface ITransaction {
  gatewayData: IEpayco | IWompi;
  gateway: GATEWAY_TYPE;
  orden: string;
  reference: string;
  fecha: Date;
  total: number;
  products: IProduct[];
  shippingPrice?: number;
  user: {
    name: string;
    numberDocument: string;
    typeDocument: string;
    email: string;
    phone: string;
  };
  shippingAdress?: {
    country: string;
    department: string;
    city: string;
    adress: string;
    adressEspecification: string;
  };
}
