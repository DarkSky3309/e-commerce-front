'use client'
import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/types/product.interface';
import { ReviewService } from '@/services/review.service';
import { Rating } from 'react-simple-star-rating';

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const { data: rating } = useQuery(['get product rating', product.id],
        () => ReviewService.getAverageRating(product.id),
    {select: ({data}) => data}
  );
  return (
    <div>
      <Rating
        readonly
        initialValue={rating}
        SVGstyle={{display: 'inline-block'}}
        size={34}
        allowFraction
        transition
        />
      {/*<span>({product.reviews.length} reviews)</span>*/}
    </div>
  );
};

export default ProductRating;