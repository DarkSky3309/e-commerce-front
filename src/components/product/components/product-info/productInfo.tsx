import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import Link from 'next/link';
import Image from 'next/image';
import ProductImages from '@/components/product/components/product-info/productImages';

const ProductInfo: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <nav className={'text-gray text-xs'}>
        <Link href={'/'}>
          <span>Home Page - </span>
        </Link>
        <Link href={`/category/${product.category.slug}`}>
          <span>{product.category.name} - </span>
        </Link>
        <span>{product.name}</span>
      </nav>
      <div>
        <h1 className={'font-bold text-2xl mt-4'}>{product.name}</h1>
        <div className={'mt-3'}>
          <ProductImages name={product.name} images={product.images}/>
          <div className={'flex items-center mt-2'}>
            <span className={'text-xl font-bold'}>${product.price}</span>
            <span className={'text-sm ml-2 text-gray-500'}>In Stock</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductInfo;