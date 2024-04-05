import { IFolder } from 'app/shared/model/folder.model';

export interface INote {
  id?: number;
  title?: string;
  content?: string;
  folder?: IFolder | null;
}

export const defaultValue: Readonly<INote> = {};
