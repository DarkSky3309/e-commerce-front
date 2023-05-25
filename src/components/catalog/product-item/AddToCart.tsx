'use client'
import React, { FC } from 'react';
import Button from '@/components/button/button';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCard';

const AddToCart: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();
  const elementIsExistInCart = items.find((el) => {
    return el.product.id === product.id;
  });
  return (
    <>
      <Button className={'block mx-auto mt-2 w-11/12'} onClick={() => {
        elementIsExistInCart ?
          removeFromCart({ id: product.id }) :
          addToCart({ product, quantity: 1, price: product.price });
      }
      } color={'orange'}>{
        elementIsExistInCart ? 'Remove from cart' : 'Add to cart'
      }
      </Button>
    </>
  );
};

export default AddToCart;