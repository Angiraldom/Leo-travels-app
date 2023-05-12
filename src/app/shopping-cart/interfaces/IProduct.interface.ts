export interface ICart {
    reference: string | null;
    products: IProduct[] | [];
}

export interface IProduct {
    name: string;
    price: number;
}