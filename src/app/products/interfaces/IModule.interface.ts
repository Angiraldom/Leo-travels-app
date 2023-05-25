import { IVideo } from "./IVideo.interface";

export interface IModule {
    name: string;
    description: string;
    videos: IVideo[];
}