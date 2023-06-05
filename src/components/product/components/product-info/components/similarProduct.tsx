import React, { FC, ReactElement } from 'react';
import Carousel from '@/components/carousel';



const SimilarProduct: FC<{ id: string | number }> = ({ id }) => {
  return (
    <Carousel id={id}/>
  )
};

export default SimilarProduct;