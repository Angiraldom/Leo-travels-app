export interface ICart {
    reference: string | null;
    products: IProduct[] | [];
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
}