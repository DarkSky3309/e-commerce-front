import React, { FC, ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import Image from 'next/image';
import { IProduct } from '@/types/product.interface';
import Carousel from '@/components/carousel';

const SimilarProductItem: FC<{ product: IProduct, onClick: () => void }> = ({ product, onClick }) => {
  return (
    <Image className={'pointer-events-none box-border w-1/3 mr-1 last-of-type:mr-0 select-none'} onClick={onClick} src={product.images[0]} alt={product.name} width={340} height={340} draggable={false}/>
  );
};

const SimilarProduct: FC<{ id: string | number }> = ({ id }) => {
  const { data } = useQuery(['get-similar'], () => ProductService.getSimilarProducts(id), {
    select: ({ data }) => data,
  });
  const array = data?.map((product) => {
    return <SimilarProductItem key={product.id} product={product} onClick={() => console.log(1)}/>;
  });
  console.log(array);
  if (array && array.length > 0)
    return (<Carousel arrayOfElement={array} />);
  return null;
};

export default SimilarProduct;