import React, { FC } from 'react';

import { IProduct, TypePaginationProducts } from '@/types/product.interface';

import CatalogPagination from '@/components/catalog/CatalogPagination';
import Layout from '@/components/layout/Layout';
import { ProductService } from '@/services/product/product.service';



function HomeComponent() {

  return (
    <>
      <Layout>
        <CatalogPagination title={'New products'} />
      </Layout>
    </>
  );
}


export default HomeComponent;
