'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/catalog/Catalog';
import { useSearchParams } from 'next/navigation';

const Search = () => {
  const query = useSearchParams();
  const term = query.get('term');
  const { data } = useQuery(['search', term],
    () => ProductService.getProducts({
      searchTerms: term as string,
    }));
  console.log(data);
  return (
    <Layout>
      <Catalog title={'Search'} products={data?.products || []}></Catalog>
    </Layout>
  );
};

export default Search;