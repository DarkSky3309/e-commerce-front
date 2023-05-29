'use client';
import React, { FC, useState } from 'react';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import { IProduct } from '@/types/product.interface';
import Heading from '@/components/heading/heading';
import SortDropDown from '@/components/catalog/SortDropDown';
import Button from '@/components/button/button';
import { PRODUCT_SORT } from '@/enums/enums';
import { ProductService } from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';

interface ICatalog {
  products: IProduct[];
  title?: string
}

const Catalog: FC<ICatalog> = ({ products, title }) => {


  return (
    <section className={''}>
      <div className={'flex justify-between items-center mb-6'}>
        {title && <Heading className={'inline-block'}>{title}</Heading>}
      </div>
      <div className={'grid grid-cols-4 row-auto first:mr-6 mb-8'}>
        {products.length ? products.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        )) : <h2>Products not found</h2>}
      </div>
    </section>
  );
};

export default Catalog;