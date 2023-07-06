import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./reducers/cart.reducer"
import { profileReducer } from "./reducers/user.reducer"
import { IUser } from "../modules/admin/user/interfaces/IUser.interface"
import { IStateCourse, courseViewReducer } from "./reducers/course.reducer"
import { IAllProducts, productViewReducer } from "./reducers/product.reducer"
import { ICart } from "../modules/admin/products/interfaces/ICart.interface"
import { classReducer } from "./reducers/class.reducer"

export interface AppState {
    cart: ICart;
    allProductView: IAllProducts;
    profile: IUser;
    courseView: IStateCourse;
    activeClass: {};
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
    profile: profileReducer,
    courseView: courseViewReducer,
    allProductView: productViewReducer,
    activeClass: classReducer,
}