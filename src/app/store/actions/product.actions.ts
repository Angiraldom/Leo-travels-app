import { createAction, props } from "@ngrx/store";
import { IClass } from "src/app/modules/courses/interfaces/IClass.interface";
import { IProduct } from "src/app/modules/products/interfaces/IProduct.interface";

export const viewAllProducts = createAction('change the component list to create', props<{ products: IProduct[] }>());
export const viewList = createAction('change the component create to list');
