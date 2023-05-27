import React, { FC } from 'react';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import { IProduct } from '@/types/product.interface';
import Heading from '@/components/heading/heading';

interface ICatalog {
  products: IProduct[];
  title?: string
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
  return (
    <section className={'flex gap-6 first:mr-6'}>
      {title && <Heading>{title}</Heading>}
      {products.length ? products.map((product: IProduct) => (
        <ProductItem key={product.id} product={product} />
      )) : <h2>Products not found</h2>}
    </section>
  );
};

export default Catalog;