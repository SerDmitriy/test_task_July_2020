export enum FILE_SYSTEM_TYPE {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

export interface IBaseSystem {
  name: string;
  type: string;
}

export interface IFolder extends IBaseSystem {
  children?: IFolder[];
}

export interface IExtendedSystem extends IFolder {
  mime?: string;
}
