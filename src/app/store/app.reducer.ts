import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./reducers/cart.reducer"
import { ICart } from "../shopping-cart/interfaces/ICart.interface"

export interface AppState {
    cart: ICart,
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer
}