'use client';
import React, { FC } from 'react';
import { ICartItem } from '@/types/cart.interface';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCard';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';

const CartAction: FC<{ item: ICartItem }> = ({item}) => {
  const { removeFromCart, changeQuantity } = useActions()
  const { items } = useCart()
  const quantity = items.find(i => i.id === item.id)?.quantity
  return (
      <div className='flex items-center gap-3'>
        <button onClick={() => changeQuantity({id: item.id, type: 'decrease'})} disabled={quantity === 1}>
          <FiMinus size={13}/>
        </button>
        <span className={'bg-secondaryColor py-1 px-2'}>{quantity}</span>
        <button onClick={() => changeQuantity({id: item.id, type: 'increase'})}>
          <FiPlus size={13}/>
        </button>
        <button onClick={() => removeFromCart({id: item.product.id})}
        className={'ml-3'}>
          <FiTrash size={13}/>
        </button>
      </div>

  );
};

export default CartAction;