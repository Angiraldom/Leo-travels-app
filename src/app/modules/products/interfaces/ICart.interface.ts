import { IProduct } from "src/app/modules/products/interfaces/IProduct.interface";

export interface ICart {
    reference: string | null;
    products: IProduct[] | [];
}