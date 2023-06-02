import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import AddToCart from '@/components/catalog/product-item/AddToCart';

const ProductBuy:FC<{product: IProduct}> = ({product}) => {
  return (
    <div>
      <span>{product.price}</span>
      <AddToCart product={product} />


    </div>
  );
};

export default ProductBuy;