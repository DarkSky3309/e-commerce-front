'use client';
import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ReviewService } from '@/services/review.service';
import { Rating } from 'react-simple-star-rating';

const ProductRating: FC<{ productId: number }> = ({ productId }) => {
  const { data: rating } = useQuery(['get product rating', productId],
    () => ReviewService.getAverageRating(productId),
    { select: ({ data }: any) => data.rating },
  );
  const { data: reviews } = useQuery(['get product reviews', productId],
    () => ReviewService.getReviews(productId),
    { select: ({ data }: any) => data },
  );

  return (
    <div className={'flex items-center relative mb-1'}>
      <Rating className={'mb-0.5 mr-1'}
        readonly
        initialValue={rating}
        SVGstyle={{ display: 'inline-block' }}
        size={18}
        allowFraction
        transition
      />
      <span>({reviews ? reviews.length : '0'} reviews)</span>
    </div>
  );
};

export default ProductRating;