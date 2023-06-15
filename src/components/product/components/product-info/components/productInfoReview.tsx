import React, { FC, useState } from 'react';
import { ReviewService } from '@/services/review.service';
import { useQuery } from '@tanstack/react-query';
import { Rating } from 'react-simple-star-rating';

const RatingBar: FC<{ percent: number }> = ({ percent }) => {
  return (
    <div className={'relative w-full h-2 bg-gray-200 rounded'}>
      <div className={'absolute h-full bg-theme rounded'} style={{ width: `${percent}%` }} />
    </div>
  );
};
const ProductInfoReview:FC<{id: string | number}>   = ({id}) => {
  const { data } = useQuery(['review', id], () => ReviewService.getReviews(id as number),
    { select: ({ data }) => data });
  const [rating, setRating] = useState(Math.round(data ?
    (data?.reduce((acc, reviews) => acc + reviews.rating, 0) / data.length) : 0
  ));
  return (
    <div>
      <h4 className={'font-bold text-xl mt-4'}>Reviews</h4>
      <div>
        <div>
          <div className={'flex gap-2 items-center'}>
            <span className={'text-8xl font-bold'}>{rating}</span>
            <div className={'flex flex-col'}>
            <span className={'font-bold'}>
              {rating} out of 5 stars
            </span>
              <Rating className={'pb-1'}
                      readonly
                      initialValue={rating}
                      SVGstyle={{ display: 'inline-block' }}
                      size={18}
                      allowFraction
                      transition
              />
              <span>
              Based on <b>{data ? data.length : 0}</b> reviews
            </span>
            </div>
          </div>
          <div>
            <RatingBar percent={20} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductInfoReview;