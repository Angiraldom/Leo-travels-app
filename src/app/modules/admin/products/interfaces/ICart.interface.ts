import { IProduct } from "./IProduct.interface";

export interface ICart {
    reference: string | null;
    products: IProduct[] | [];
}