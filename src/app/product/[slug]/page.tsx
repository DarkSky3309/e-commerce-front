import { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/catalog/Catalog';
import Category from '@/components/categoty/category';
import Product from '@/components/product/product';

export default function ProductPage({params, searchParams} :
                                       {params: {slug: string}, searchParams: { [key: string]: string | string[] | undefined}})
{


  return <Product slug={params.slug}/>
};

