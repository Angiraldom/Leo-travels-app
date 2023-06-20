import { Action, createReducer, on } from "@ngrx/store"
import * as courseActions from "../actions/course.actions";

const initialState = {
    inViewCreate: false,
}

const _courseViewReducer = createReducer(
    initialState,

    on(courseActions.viewCreate, state => ({ ...state, inViewCreate: true })),
    
    on(courseActions.viewList, state => ({ ...state, inViewCreate: false }))

)

export function courseViewReducer(state: any, action: Action) {
    return _courseViewReducer(state, action);
}