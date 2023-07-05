import { Action, createReducer, on } from '@ngrx/store';
import * as productActions from '../actions/product.actions';
import { IProduct } from 'src/app/modules/products/interfaces/IProduct.interface';

export interface IAllProducts {
  allProducts : IProduct[];
}

const initialState: IAllProducts = {
  allProducts: [],
};

const _productViewReducer:any = createReducer(
  initialState,

  on(productActions.viewAllProducts, (state, { products }) => {
      return { ...state, allProducts:[...products]};
  }),
);

export function productViewReducer(state: any, action: Action) {
  return _productViewReducer(state, action);
}