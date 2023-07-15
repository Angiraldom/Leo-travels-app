import { IUser } from "../../admin/user/interface/IUser.interface";

export interface IComment {
    comment: string;
    user: IUser;
    createdAt: Date;
    idClass: string;
}