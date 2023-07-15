import { ICourse } from "../../courses/interfaces/ICourses.interface";
import { IProduct } from "./IProduct.interface";

export interface ICart {
    reference: string | null;
    products: IProduct[] |  ICourse[] | [];
}