import Head from 'next/head';

import Product from '@/components/product/product';

export default function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const metadata = {
    title: `${params.slug} | E-commerce`,
    description: 'My E-commerce app',
  };
  return <Product slug={params.slug} />;
}
