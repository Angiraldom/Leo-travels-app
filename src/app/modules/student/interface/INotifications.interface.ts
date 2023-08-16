import { IUser } from "../../admin/user/interface/IUser.interface";
import { IComment } from "./IComments.inerface";

export interface INotifications {
  comment: IComment;
  creator: IUser;
  userCreatorComment: IUser;
  seenBy?: string[];
  isAnswer?: boolean;
  answer?: string;
  createdAt?: Date;
}
