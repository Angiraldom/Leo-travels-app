import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/modules/admin/products/interfaces/IProduct.interface";

export const viewAllProducts = createAction('change the component list to create', props<{ products: IProduct[] }>());
export const viewList = createAction('change the component create to list');
