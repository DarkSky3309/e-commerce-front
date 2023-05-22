import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
import Button from '@/components/button/button';
import FavoriteBtn from '@/components/catalog/product-item/FavoriteBtn';
import ProductRating from '@/components/catalog/product-item/ProductRating';

const ProductItem :FC<{product: IProduct}>= ({product}) => {
  return (
    <div>
      <div>
        <FavoriteBtn productId={product.id}/>
        <Image src={product.images[0]} alt={product.name} width={300} height={300}/>
      </div>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category.name}</span>
        <ProductRating rating={product.rating}/>
        <span>{product.price}</span>
        <Button color={'orange'}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;