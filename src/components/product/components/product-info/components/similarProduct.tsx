import React, { FC, ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import Image from 'next/image';
import { IProduct } from '@/types/product.interface';
import Carousel from '@/components/carousel';



const SimilarProduct: FC<{ id: string | number }> = ({ id }) => {

  return (
    <Carousel id={id}/>
  )
};

export default SimilarProduct;