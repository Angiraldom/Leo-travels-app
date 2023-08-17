import { IUser } from '../../admin/user/interface/IUser.interface';

export interface IAnswer {
  creator: IUser;
  createdAt: Date;
  _id: string;
  answer?: string;
}
