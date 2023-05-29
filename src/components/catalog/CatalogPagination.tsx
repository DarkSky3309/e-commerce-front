'use client';
import React, { FC, useEffect, useState } from 'react';
import ProductItem from '@/components/catalog/product-item/ProductItem';
import { IDataProduct, IProduct, TypePaginationProducts } from '@/types/product.interface';
import Heading from '@/components/heading/heading';
import SortDropDown from '@/components/catalog/SortDropDown';
import Button from '@/components/button/button';
import { PRODUCT_SORT } from '@/enums/enums';
import { ProductService } from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';

interface ICatalogPagination {
  data: TypePaginationProducts;
  title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
  const [sortType, setSortType] = useState<PRODUCT_SORT>(PRODUCT_SORT.newest);
  const [page, setPage] = useState(1);
  const { data : response } = useQuery(['products', sortType, page], () => ProductService.getProducts({
    page,
    perPage: 4,
    sort: sortType,
  }),{
    initialData: data,
    onSuccess: (data) => {
      setProducts(prevState => [...prevState, ...data.products]);
    }
  });
  useEffect(() => {
    setProducts([])
    setPage(1)
  }, [sortType]);
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <section className={''}>
      <div className={'flex justify-between items-center mb-6'}>
        {title && <Heading className={'inline-block'}>{title}</Heading>}
        <SortDropDown setSortType={setSortType} sortType={sortType} />
      </div>

      <div className={'grid grid-cols-4 row-auto first:mr-6 mb-8'}>
        {products.length ? products.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        )) : <h2>Products not found</h2>}
      </div>
      <div className={'text-center'}>
        <Button onClick={() => setPage(prevState => prevState + 1)} size={'sm'} color={'orange'}>Load more</Button>
      </div>
    </section>
  );
};

export default CatalogPagination;