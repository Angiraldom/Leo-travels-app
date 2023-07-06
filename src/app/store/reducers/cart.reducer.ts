import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "../actions/cart.actions";
import { ICart } from "src/app/modules/admin/products/interfaces/ICart.interface";

export const initialState: ICart = { reference: '', products: []};

const _cartReducer = createReducer(initialState,

    on( actions.addProduct, (state, { reference, product }) => {
        return { reference, products: [...state.products, product] }
    }),

    on( actions.updateProduct, (state, { product }) => {

        const result = state.products.map((item) => {
            if (product.id !== item.id) {
                return item;
            }
            return { ...product };
        });
        
        return { ...state, products: [...result] }
    }),

    on( actions.deleteProduct, (state, { product }) => {
        return { ...state, products: state.products.filter(item => product.id !== item.id)};
    }),

    on( actions.initCart, (state, { reference, products }) => {
        return { ...state, reference, products: [...products] }
    }),

    on( actions.clearCart, () => {
        return { reference: '', products: []}
    })
)

export function cartReducer(state: any, action: Action) {
    return _cartReducer(state, action);
}