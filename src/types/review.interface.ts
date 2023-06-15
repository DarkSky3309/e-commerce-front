import { IUser } from '@/types/user.interface';

export interface IReview{
  id: number;
  user: IUser;
  createdAt: Date;
  text: string;
  rating: number;

}

export interface IDataReview{
  text: string;
  rating: number;
}