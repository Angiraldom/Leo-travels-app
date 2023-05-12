import { Action, createReducer, on } from "@ngrx/store";
import { addProduct } from "../actions/cart.actions";
import { IProduct } from "../../shopping-cart/interfaces/IProduct.interface";

export const initialState: IProduct[] = [{ name: 'asdasd', price: 3 }];

const _cartReducer = createReducer(initialState,

    on( addProduct, (state, { product }) => {
        return [...state, product];
    })
)

export function cartReducer(state: any, action: Action) {
    return _cartReducer(state, action);
}