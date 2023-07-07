import { Action, createReducer, on } from "@ngrx/store";
import { nextClass, previousClass } from "../actions/class.actions";

const initState = { typeSelection: '' };

const _classReducer = createReducer(initState,
  on(nextClass, (state) => {
    return { ...state, typeSelection: 'next' };
  }),

  on(previousClass, (state) => {
    return { ...state, typeSelection: 'previous' };
  })
);

export function classReducer(state: any, action: Action) {
  return _classReducer(state, action);
}
