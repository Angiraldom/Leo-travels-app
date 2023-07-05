import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./reducers/cart.reducer"
import { ICart } from "../modules/products/interfaces/ICart.interface"
import { profileReducer } from "./reducers/user.reducer"
import { IUser } from "../modules/user/interfaces/IUser.interface"
import { IStateCourse, courseViewReducer } from "./reducers/course.reducer"
import { IAllProducts, productViewReducer } from "./reducers/product.reducer"

export interface AppState {
    cart: ICart;
    allProductView: IAllProducts;
    profile: IUser;
    courseView: IStateCourse;
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
    profile: profileReducer,
    courseView: courseViewReducer,
    allProductView: productViewReducer,
}