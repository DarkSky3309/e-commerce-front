'use client';
import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
import FavoriteBtn from '@/components/catalog/product-item/FavoriteBtn';
import ProductRating from '@/components/catalog/product-item/ProductRating';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      {isLoaded ? <div>
        <div>
          {user ? <FavoriteBtn productId={product.id} /> : ''}
          <Image src={product.images[0]} alt={product.name} width={300} height={300} />
        </div>
        <div>
          <h3>{product.name}</h3>
          <span>{product.category.name}</span>
          <ProductRating productId={product.id} />
          <span>{product.price}</span>
        </div>
      </div>
        :
        ''}
    </>

  );
};

export default ProductItem;