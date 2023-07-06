import { IModule } from "./IModule.interface";
import { IClass } from "./IClass.interface";;

export type typeForm = 'course' | 'module' | 'class';

export interface IParametersObject {
  body?: unknown;
  indexModule?: number;
  indexClass?: number;
  idCourse?: string;
  idModule?: string;
  module?: IModule;
  class?: IClass;
}