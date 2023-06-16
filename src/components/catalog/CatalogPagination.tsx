'use client';

import { useQuery } from '@tanstack/react-query';
import React, { FC, useEffect, useRef, useState } from 'react';

import { IProduct, TypePaginationProducts } from '@/types/product.interface';

import Button from '@/components/button/button';
import SortDropDown from '@/components/catalog/SortDropDown';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import Heading from '@/components/heading/heading';
import { PRODUCT_SORT } from '@/enums/enums';
import { ProductService } from '@/services/product/product.service';

interface ICatalogPagination {
  title?: string;
}

const CatalogPagination: FC<ICatalogPagination> = ({  title }) => {
  const [sortType, setSortType] = useState<PRODUCT_SORT>(PRODUCT_SORT.newest);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const btn = useRef<HTMLDivElement>(null);
  const { data: response } = useQuery(
    ['products', sortType, page],
    () =>
      ProductService.getProducts({
        page,
        perPage: 4,
        sort: sortType,
      }),
    {
      onSuccess: (data) => {
        setProducts((prevState) => [...prevState, ...data.products]);
      },
    }
  );

  useEffect(() => {
    setProducts([]);
    setPage(1);
  }, [sortType]);

  if (response && response.products.length < 4) {
    btn.current?.classList.add('hidden');
  } else {
    btn.current?.classList.remove('hidden');
  }

  return (
    <section className={''}>
      <div className={'flex justify-between items-center mb-6'}>
        {title && <Heading className={'inline-block'}>{title}</Heading>}
        <SortDropDown setSortType={setSortType} sortType={sortType} />
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
      <div className={'text-center'} ref={btn}>
        <Button
          onClick={() => setPage((prevState) => prevState + 1)}
          size={'sm'}
          color={'orange'}
        >
          Load more
        </Button>
      </div>
    </section>
  );
};

export default CatalogPagination;
