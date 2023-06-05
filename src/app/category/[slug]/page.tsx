import { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/catalog/Catalog';
import Category from '@/components/categoty/category';

export default function CategoryPage({ params, searchParams }:
                                       {
                                         params: { slug: string },
                                         searchParams: { [key: string]: string | string[] | undefined }
                                       }) {
  return <Category slug={params.slug} />;
};

