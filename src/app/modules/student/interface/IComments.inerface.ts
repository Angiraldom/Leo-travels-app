import { IClass } from '../../admin/courses/interfaces/IClass.interface';
import { IUser } from '../../admin/user/interface/IUser.interface';

export interface IComment {
  comment: string;
  user: IUser;
  createdAt: Date;
  class: IClass;
  idModule: string;
  idCourse: string;
  _id: string;
  answers: Array<IComment>;
  seenBy: Array<IUser>;
  showTextAreaAnswer: boolean;
  answer?: string;
}
