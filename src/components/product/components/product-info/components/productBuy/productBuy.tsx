import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import AddToCart from '@/components/catalog/product-item/AddToCart';
import BuyInOneClick from '@/components/product/components/product-info/components/productBuy/BuyInOneClick';
import FavoriteBtn from '@/components/catalog/product-item/FavoriteBtn';

const ProductBuy:FC<{product: IProduct}> = ({product}) => {
  const time = new Date().getTime() + 5270400000;
  const currentTime = new Date(time)
  return (
    <div className={'text-center w-1/4'}>
      <span className={'text-xl font-bold'}>${product.price}</span>
      <div className={'flex gap-4 justify-center'}><span className={'text-gray'}>Delivery: </span>{currentTime.toLocaleString().slice(0, 8)}</div>
      <div>
          <AddToCart color={'light'} product={product}/>
        <div className={'flex gap-3 mt-2'}>
          <BuyInOneClick product={product}/>
          <FavoriteBtn productId={product.id}/>
        </div>

      </div>

    </div>
  );
};

export default ProductBuy;