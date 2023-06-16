'use client';

import React, { FC } from 'react';

import { IProduct } from '@/types/product.interface';

import ProductItem from '@/components/catalog/product-item/ProductItem';
import Heading from '@/components/heading/heading';

interface ICatalog {
  products: IProduct[];
  title?: string;
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
  return (
    <section className={''}>
      <div className={'flex justify-between items-center mb-6'}>
        {title && (
          <Heading className={'inline-block'}>{title.toUpperCase()}</Heading>
        )}
      </div>
      <div className={'grid grid-cols-4 row-auto first:mr-6 mb-8'}>
        {products.length ? (
          products.map((product: IProduct) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <h2>Products not found</h2>
        )}
      </div>
    </section>
  );
};

export default Catalog;
