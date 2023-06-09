import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./reducers/cart.reducer"
import { ICart } from "../shopping-cart/interfaces/ICart.interface"
import { profileReducer } from "./reducers/user.reducer"
import { IUser } from "../modules/user/interfaces/IUser.interface"

export interface AppState {
    cart: ICart,
    profile: IUser
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
    profile: profileReducer,
}