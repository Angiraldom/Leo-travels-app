import { IProduct } from "src/app/products/interfaces/IProduct.interface";

export interface ICart {
    reference: string | null;
    products: IProduct[] | [];
}