'use client';
import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
import FavoriteBtn from '@/components/catalog/product-item/FavoriteBtn';
import ProductRating from '@/components/catalog/product-item/ProductRating';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import AddToCart from '@/components/catalog/product-item/AddToCart';
import Link from 'next/link';

const ImageSample :FC<{product: IProduct}> = ({product}) => {
  return (
    <>
      <Link href={`/product/${product.slug}`} className={'flex justify-center py-6 bg-white w-56'}>
        <Image src={product.images[0]} width="200" height="200" alt={''} />
      </Link>
    </>
  );
}

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className={'relative w-fit first:ml-6 animate-scaleIn mb-6'}>
      {isLoaded && <div>
        <div className={'relative'}>
          {user ? <FavoriteBtn productId={product.id} /> : ''}
          <ImageSample product={product} />
        </div>
        <div>
          <Link href={`/product/${product.slug}`}>
            <h3 className={'font-semibold leading-3 mt-2'}>{product.name}</h3>
          </Link>
          <Link href={`/category/${product.category.slug}`} className={'text-xs text-coldBlue'}>{product.category.name}</Link>
          <ProductRating product={product} />
          <span className={'font-bold text-xl'}>${product.price},00 </span>
          <span className={'text-gray line-through'}>${Math.floor(product.price + product.price / 100 * 10) + ',00'}</span>
          <AddToCart product={product}/>
        </div>
      </div>}
    </div>
  );
};

export default ProductItem;