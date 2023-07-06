import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/modules/admin/user/interfaces/IUser.interface';
import { getProfile } from '../actions/user.actions';

export const initialState: IUser = {};

const _profileReducer = createReducer(
  initialState,

  on(getProfile, (state, { user }) => {
    return { ...state, ...user };
  })
);

export function profileReducer(state: any, action: Action) {
  return _profileReducer(state, action);
}
