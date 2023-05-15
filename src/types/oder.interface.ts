import { ICartItem } from '@/types/cart.interface';
import { ORDER_STATUS } from '@/enums/enums';
import { IUser } from '@/types/user.interface';

export interface IOrder {
  id: number;
  //CAN HAVE SOME BUGS
  created_at: Date;
  items: ICartItem[];
  status: ORDER_STATUS;
  user: IUser;
}

