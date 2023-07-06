import { createAction, props } from "@ngrx/store";
import { ICourse } from "src/app/modules/admin/courses/interfaces/ICourses.interface";

export const viewCreate = createAction('change the component list to create', props<{ course?: ICourse }>());
export const viewList = createAction('change the component create to list');
