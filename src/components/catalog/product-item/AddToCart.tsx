import React, { FC } from 'react';
import Button from '@/components/button/button';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import { useCard } from '@/hooks/useCard';

const AddToCart: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions();
  const { item } = useCard();

  const elementIsExistInCart = item.find((el: IProduct) => el.id === product.id);

  return (
    <>
      <Button onClick={() => {
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