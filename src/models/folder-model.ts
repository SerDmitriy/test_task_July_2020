export enum FILE_SYSTEM_TYPE {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

export interface IBaseSystem {
  name: string;
  type: string;
}

export interface IFolder extends IBaseSystem {
  children?: any[];
}

export interface IExtendedSystem extends IFolder {
  mime?: string;
}
