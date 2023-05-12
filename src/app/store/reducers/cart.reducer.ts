import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "../actions/cart.actions";
import { ICart } from "../../shopping-cart/interfaces/IProduct.interface";

export const initialState: ICart = { reference: null, products: [] };

const _cartReducer = createReducer(initialState,

    on( actions.addProduct, (state, { reference, product }) => {
        return { reference, products: [...state.products, product] }
    }),

    on( actions.initCart, (state, { reference, products }) => {
        return { ...state, reference, products: [...products] }
    })
)

export function cartReducer(state: any, action: Action) {
    return _cartReducer(state, action);
}