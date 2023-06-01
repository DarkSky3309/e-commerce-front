'use client';
import React, { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import Catalog from '@/components/catalog/Catalog';

const Category: FC<{slug: string}> = ({slug}) => {
  const { data } = useQuery(['search', slug],
    () => ProductService.getProducts({
      searchTerms: slug as string,
    }));
  return (
    <Layout>
      <Catalog products={data?.products || []} title={slug} />
    </Layout>
  );
};

export default Category;