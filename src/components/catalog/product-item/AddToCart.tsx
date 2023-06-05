'use client'
import React, { FC } from 'react';
import Button from '@/components/button/button';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCard';

const AddToCart: FC<{ product: IProduct, color?: 'orange' | 'light' }> = ({ product, color = 'orange' }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();
  const elementIsExistInCart = items.find((el) => {
    return el.product.id === product.id;
  });
  return (
    <>
      <Button className={'block mt-2 w-full'} onClick={() => {
        elementIsExistInCart ?
          removeFromCart({ id: product.id }) :
          addToCart({ product, quantity: 1, price: product.price });
      }
      } color={color}>{
        elementIsExistInCart ? 'Remove from cart' : 'Add to cart'
      }
      </Button>
    </>
  );
};

export default AddToCart;