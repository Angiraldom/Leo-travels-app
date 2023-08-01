import { IProduct } from "../../products/interfaces/IProduct.interface";

export interface ICoupon {
    _id: string;
    coupon: string;
    descriptionName: string;
    discount: number;
    startDate: Date;
    endDate: Date;
    products: IProduct[];
    updatedAt: Date;
    createdAt: Date;
}