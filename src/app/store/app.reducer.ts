import { ActionReducerMap } from "@ngrx/store"
import { cartReducer } from "./reducers/cart.reducer"
import { profileReducer } from "./reducers/user.reducer"
import { IStateCourse, courseViewReducer } from "./reducers/course.reducer"
import { ICart } from "../modules/admin/products/interfaces/ICart.interface"
import { classReducer } from "./reducers/class.reducer"
import { IUser } from "../modules/admin/user/interface/IUser.interface"


export interface AppState {
    cart: ICart;
    profile: IUser;
    courseView: IStateCourse;
    activeClass: {};
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
    profile: profileReducer,
    courseView: courseViewReducer,
    activeClass: classReducer,
}