import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/modules/admin/user/interface/IUser.interface";

export const getProfile = createAction('Get Profile', props<{user: IUser}>());