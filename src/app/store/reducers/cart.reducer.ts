import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "../actions/cart.actions";
import { ICart } from "../../shopping-cart/interfaces/ICart.interface";

export const initialState: ICart = { reference: null, products: []};

const _cartReducer = createReducer(initialState,

    on( actions.addProduct, (state, { reference, product }) => {
        return { reference, products: [...state.products, product] }
    }),

    on( actions.updateProduct, (state, { product }) => {

        const result = state.products.map((item) => {
            if (product._id !== item._id) {
                return item;
            }
            return { ...product };
        });
        
        return { ...state, products: [...result] }
    }),

    on( actions.deleteProduct, (state, { product }) => {
        return { ...state, products: state.products.filter(item => product._id !== item._id)};
    }),

    on( actions.initCart, (state, { reference, products }) => {
        return { ...state, reference, products: [...products] }
    })
)

export function cartReducer(state: any, action: Action) {
    return _cartReducer(state, action);
}