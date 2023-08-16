import { IClass } from '../../admin/courses/interfaces/IClass.interface';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { IAnswer } from './IAnswers.interface';

export interface IComment {
  comment: string;
  user: IUser;
  createdAt: Date;
  class: IClass;
  idModule: string;
  idCourse: string;
  _id: string;
  answers: Array<IAnswer>;
  seenBy: Array<IUser>;
  showTextAreaAnswer: boolean;
  answer?: string;
}
