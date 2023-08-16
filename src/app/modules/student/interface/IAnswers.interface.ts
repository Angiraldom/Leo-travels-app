import { IUser } from '../../admin/user/interface/IUser.interface';
import { IComment } from './IComments.inerface';

export interface IAnswer {
  idComment: IComment;
  creator: IUser;
  createdAt: Date;
  _id: string;
  seenBy: Array<IUser>;
  answer?: string;
}
