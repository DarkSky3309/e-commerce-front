import React, { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import Link from 'next/link';
import Image from 'next/image';
import ProductImages from '@/components/product/components/product-info/productImages';
import ProductBuy from '@/components/product/components/product-info/components/productBuy/productBuy';

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
        <div className={'mt-3 flex'}>
          <ProductImages name={product.name} images={product.images}/>
          <ProductBuy product={product}/>
        </div>

      </div>

    </div>
  );
};

export default ProductInfo;