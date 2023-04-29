import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../../shopping-cart/interfaces/IProduct.interface";


export const addProduct = createAction('Add Product', props<{product: IProduct}>());