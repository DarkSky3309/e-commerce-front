'use client'
import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
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
        <ProductRating product={product}/>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductItem;