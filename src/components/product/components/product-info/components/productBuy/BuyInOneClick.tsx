import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { useActions } from '@/hooks/useActions';

import { IProduct } from '@/types/product.interface';

import Button from '@/components/button/button';

const BuyInOneClick: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart } = useActions();
  const router = useRouter();
  const buyInOneClick = () => {
    addToCart({ product, quantity: 1, price: product.price });
    router.replace('/cart');
  };

  return (
    <Button className={'w-full'} onClick={buyInOneClick} color={'orange'}>
      Buy in one click
    </Button>
  );
};

export default BuyInOneClick;
