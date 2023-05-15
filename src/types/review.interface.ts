import { IUser } from '@/types/user.interface';

export interface IReview{
  id: number;
  user: IUser;
  created_at: Date;
  text: string;
  rating: string;

}

export interface IDataReview{
  text: string;
  rating: number;
}