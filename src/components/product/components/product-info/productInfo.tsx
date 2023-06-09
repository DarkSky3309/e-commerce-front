import Link from 'next/link';
import React, { FC } from 'react';

import { IProduct } from '@/types/product.interface';

import AboutProduct from '@/components/product/components/product-info/components/aboutProduct';
import ProductBuy from '@/components/product/components/product-info/components/productBuy/productBuy';
import ProductInfoReview from '@/components/product/components/product-info/components/productBuy/review/productInfoReview';
import ProductDescriptions from '@/components/product/components/product-info/components/productDescriptions';
import SimilarProduct from '@/components/product/components/product-info/components/similarProduct';
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
        <div className={'mt-3 flex justify-evenly'}>
          <ProductImages name={product.name} images={product.images} />
          <ProductDescriptions />
          <ProductBuy product={product} />
        </div>
      </div>
      <AboutProduct />
      <SimilarProduct id={product.id} />
      <ProductInfoReview id={product.id} />
    </div>
  );
};

export default ProductInfo;
