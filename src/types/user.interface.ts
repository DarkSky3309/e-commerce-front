export interface IUser{
  id: number;
  email: string;
  name: string;
  avatarPath: string;
  phone: string;
}

export interface IDataUser{
  email: string;
  password?: string;
  name?: string;
  phone?: string;
  avatarPath?: string;
}