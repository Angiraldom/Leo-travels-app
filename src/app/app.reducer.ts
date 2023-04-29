import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./shared/redux/cart/cart.reducer"
import { IProduct } from "./shopping-cart/interfaces/IProduct.interface"

export interface AppState {
    products: IProduct[],
}

export const appReducers: ActionReducerMap<AppState> = {
    products: cartReducer
}