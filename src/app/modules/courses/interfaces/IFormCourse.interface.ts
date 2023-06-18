import { ComponentType } from "@angular/cdk/portal";
import { IModule } from "./IModule.interface";
import { IClass } from "./IClass.interface";;
import { FormCourseComponent } from "../form-course/form-course.component";
import { FormModuleComponent } from "../form-module/form-module.component";
import { FormClassComponent } from "../form-class/form-class.component";

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