import React, { FC } from 'react';
import { ICartItem } from '@/types/cart.interface';
import Image from 'next/image';
import CartAction from '@/components/header/components/headerCart/cart-item/cartAction';

const CartItem:FC<{item: ICartItem}> = ({item}) => {
  return (
    <div className={'flex mb-6'}>
      <Image className={''} src={item.product.images[0]} alt={item.product.name}
      width={100} height={100}/>
      <div className={'ml-4 flex flex-col justify-between'}>
        <h4>{item.product.name}</h4>
        <span> {item.quantity} = ${item.quantity * item.product.price}</span>
        <CartAction item={item}/>
      </div>
    </div>
  );
};

export default CartItem;