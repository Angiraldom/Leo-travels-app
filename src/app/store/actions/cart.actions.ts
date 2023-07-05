import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/modules/products/interfaces/IProduct.interface";


export const addProduct = createAction('Add Product', props<{reference: string; product: IProduct}>());

export const updateProduct = createAction('update Product', props<{reference: string; product: IProduct}>());

export const deleteProduct = createAction('delete Product', props<{reference: string; product: IProduct}>());

export const initCart = createAction('Init Cart', props<{reference: string; products: IProduct[]}>());

export const clearCart = createAction('Clear Cart');
