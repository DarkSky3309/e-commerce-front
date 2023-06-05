import React, { FC } from 'react';
import Button from '@/components/button/button';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/navigation';

const BuyInOneClick:FC<{product: IProduct}> = ({product}) => {
  const { addToCart } = useActions();
  const router = useRouter()
  const buyInOneClick = () => {
    addToCart({product, quantity: 1, price: product.price})
    router.replace('/cart')
  }

  return (
    <Button className={'w-full'} onClick={buyInOneClick} color={'orange'}>Buy in one click
    </Button>
  );
};

export default BuyInOneClick;