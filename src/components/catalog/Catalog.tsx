import React, { FC } from 'react';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import { IProduct } from '@/types/product.interface';
import Heading from '@/components/heading/heading';
import SortDropDown from '@/components/catalog/SortDropDown';

interface ICatalog {
  products: IProduct[];
  title?: string
  isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({ products, title, isPagination = false }) => {
  return (
    <section className={''}>
      {title && <Heading className={'inline-block'}>{title}</Heading>}
      {isPagination && <SortDropDown />}
      <div className={'flex gap-6 first:mr-6'}>
        {products.length ? products.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        )) : <h2>Products not found</h2>}
      </div>

    </section>
  );
};

export default Catalog;