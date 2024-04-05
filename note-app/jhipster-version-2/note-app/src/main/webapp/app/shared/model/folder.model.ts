import { IUser } from 'app/shared/model/user.model';

export interface IFolder {
  id?: number;
  name?: string;
  user?: IUser | null;
  subFolder?: IFolder | null;
}

export const defaultValue: Readonly<IFolder> = {};
