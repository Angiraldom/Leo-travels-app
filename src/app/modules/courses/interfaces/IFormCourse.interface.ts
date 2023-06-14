import { ComponentType } from "@angular/cdk/portal";
import { FormGroup } from "@angular/forms";

type typeForm = 'course' | 'module' | 'class';

export interface IParametersObject {
  body?: FormGroup;
  indexModule?: number;
  indexClass?: number;
}

export interface IValueObject {
  type: typeForm;
  component: ComponentType<unknown>;
  create: (data: IParametersObject) => void;
  update?: (data: IParametersObject) => void;
}

export interface ITypeObject {
  course: IValueObject;
  module: IValueObject;
  class: IValueObject;
}
