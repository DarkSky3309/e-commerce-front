'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import Catalog from '@/components/catalog/Catalog';
import Layout from '@/components/layout/Layout';
import { ProductService } from '@/services/product/product.service';

const Search = () => {
  const query = useSearchParams();
  const term = query.get('term');
  const { data } = useQuery(['search', term], () =>
    ProductService.getProducts({
      searchTerms: term as string,
    })
  );
  console.log(data);
  return (
    <Layout>
      <Catalog title={'Search'} products={data?.products || []}></Catalog>
    </Layout>
  );
};

export default Search;
