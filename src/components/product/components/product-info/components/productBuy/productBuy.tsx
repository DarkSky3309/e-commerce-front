import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import AddToCart from '@/components/catalog/product-item/AddToCart';
import BuyInOneClick from '@/components/product/components/product-info/components/productBuy/BuyInOneClick';
import FavoriteBtn from '@/components/catalog/product-item/FavoriteBtn';

const ProductBuy:FC<{product: IProduct}> = ({product}) => {
  return (
    <div className={'text-center w-1/4'}>
      <span className={'text-xl font-bold'}>${product.price}</span>
      <div>
          <AddToCart product={product}/>
        <div className={'flex mt-2'}>
          <BuyInOneClick product={product}/>
          <FavoriteBtn productId={product.id}/>
        </div>

      </div>

    </div>
  );
};

export default ProductBuy;