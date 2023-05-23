import React, { FC } from 'react';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import { IProduct } from '@/types/product.interface';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <section>
      {products.length ? products.map((product: IProduct) => (
        <ProductItem key={product.id} product={product} />
      )) : <h2>Products not found</h2>}
    </section>
  );
};

export default Catalog;