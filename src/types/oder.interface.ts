import { ICartItem } from '@/types/cart.interface';
import { IUser } from '@/types/user.interface';

import { ORDER_STATUS } from '@/enums/enums';

export interface IOrder {
  id: number;
  //CAN HAVE SOME BUGS
  created_at: Date;
  items: ICartItem[];
  status: ORDER_STATUS;
  user: IUser;
}
