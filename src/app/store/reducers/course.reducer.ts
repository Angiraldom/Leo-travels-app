import { Action, createReducer, on } from '@ngrx/store';
import * as courseActions from '../actions/course.actions';
import { ICourse } from 'src/app/modules/admin/courses/interfaces/ICourses.interface';

export interface IStateCourse {
  inViewCreate: boolean;
  course?: ICourse;
}

const initialState: IStateCourse = {
  inViewCreate: false,
};

const _courseViewReducer = createReducer(
  initialState,

  on(courseActions.viewCreate, (state, { course }) => {
    if (!course) {
      return { ...state, inViewCreate: true };
    } else {
      return { ...state, inViewCreate: true, course: { ...course } };
    }
  }),

  on(courseActions.viewList, (state) => {
    const newState = {...state};
    delete newState.course;
    return { ...newState, inViewCreate: false };
  })
);

export function courseViewReducer(state: any, action: Action) {
  return _courseViewReducer(state, action);
}