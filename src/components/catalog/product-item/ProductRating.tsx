'use client';

import React, { FC, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IProduct } from '@/types/product.interface';

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const [rating, setRating] = useState(
    Math.round(
      product.reviews?.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews?.length
    ) || 0
  );
  useEffect(() => {
    setRating(
      Math.round(
        product.reviews?.reduce((acc, review) => acc + review.rating, 0) /
          product.reviews?.length
      ) || 0
    );
  }, [product.reviews]);

  return (
    <div className={'flex items-center relative mb-1'}>
      <Rating
        className={'mb-0.5 mr-1'}
        readonly
        initialValue={rating}
        SVGstyle={{ display: 'inline-block' }}
        size={18}
        allowFraction
        transition
      />
      <span>({product.reviews ? product.reviews.length : '0'} reviews)</span>
    </div>
  );
};

export default ProductRating;
