import React, { FC } from 'react';
import Catalog from '@/components/catalog/Catalog';
import { TypePaginationProducts } from '@/types/product.interface';
import { ProductService } from '@/services/product/product.service';
import Header from '@/components/header/header';
import Layout from '@/components/layout/Layout';
import CatalogPagination from '@/components/catalog/CatalogPagination';


export const revalidate = 60;
async function getProducts() {
const data:TypePaginationProducts = await ProductService.getProducts({
    page: 1,
    perPage: 4,
  }).then((res) => res);
  return data;
}
{/* @ts-expect-error Async Server Component */}

const HomeComponent: FC = async () => {
  const data = await getProducts();
  return (
    <>
      <Layout>
        <CatalogPagination data={data} title={'New products'}/>
      </Layout>
    </>
  );
};


export default HomeComponent;