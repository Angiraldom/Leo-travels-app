import { Action, createReducer, on } from '@ngrx/store';
import { clearProfile, getProfile } from '../actions/user.actions';
import { IUser } from 'src/app/modules/admin/user/interface/IUser.interface';

export const initialState: IUser = {};

const _profileReducer = createReducer(
  initialState,

  on(getProfile, (state, { user }) => {
    return { ...state, ...user };
  }),

  on(clearProfile, () => {
    return {};
  })
);

export function profileReducer(state: any, action: Action) {
  return _profileReducer(state, action);
}
