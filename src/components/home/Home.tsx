import React, { FC } from 'react';

import { IProduct, TypePaginationProducts } from '@/types/product.interface';

import CatalogPagination from '@/components/catalog/CatalogPagination';
import Layout from '@/components/layout/Layout';
import { ProductService } from '@/services/product/product.service';



async function HomeComponent() {
  const data: TypePaginationProducts = await ProductService.getProducts({
    page: 1,
    perPage: 4,
  }).then((res) => res);
  return (
    <>
      <Layout>
        <CatalogPagination data={data} title={'New products'} />
      </Layout>
    </>
  );
}


export default HomeComponent;
