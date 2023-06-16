'use client';

import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';

import Catalog from '@/components/catalog/Catalog';
import Layout from '@/components/layout/Layout';
import { ProductService } from '@/services/product/product.service';

const Category: FC<{ slug: string }> = ({ slug }) => {
  const { data } = useQuery(['search', slug], () =>
    ProductService.getProducts({
      searchTerms: slug as string,
    })
  );
  return (
    <Layout>
      <Catalog products={data?.products || []} title={slug} />
    </Layout>
  );
};

export default Category;
