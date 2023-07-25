export type typeRoles = 'Admin' | 'Cliente';

export interface IUser {
  name?: string;
  lastName?: string;
  password?: string;
  email?: string;
  typeDocument?: string;
  numberDocument?: number;
  role?: typeRoles;
  municipalityDepartament?: string;
  residenceAddress?: string;
  codePostal?: number;
  phone?: number;
  _id?: string;
}