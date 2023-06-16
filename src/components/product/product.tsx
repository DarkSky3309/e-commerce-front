'use client';

import { useQuery } from '@tanstack/react-query';
import React, { FC, useEffect, useState } from 'react';

import { IProduct } from '@/types/product.interface';

import Layout from '@/components/layout/Layout';
import ProductInfo from '@/components/product/components/product-info/productInfo';
import { ProductService } from '@/services/product/product.service';

const Product: FC<{ slug: string }> = ({ slug }) => {
  const { data } = useQuery(
    ['get product slug', slug],
    () => ProductService.getProductBySlug(slug as string),
    { select: (data) => data.data }
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      setIsLoaded(true);
    }
  }, [data]);
  return (
    <Layout>{isLoaded && <ProductInfo product={data as IProduct} />}</Layout>
  );
};

export default Product;
