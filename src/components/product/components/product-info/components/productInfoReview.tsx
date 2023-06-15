import React, { FC, useState } from 'react';
import { ReviewService } from '@/services/review.service';
import { useQuery } from '@tanstack/react-query';
import { Rating } from 'react-simple-star-rating';

const RatingBar: FC<{ percent: number, text: string }> = ({ percent, text }) => {
  return (
    <div className={'flex items-center gap-2'}><span>{text}</span>
      <div className={'relative w-full h-2 bg-gray rounded'}>
        <div className={'absolute h-full bg-themeColor transition rounded'} style={{ width: `${percent}%` }} />
      </div>
      <span>{percent}%</span>
    </div>

  );
};
const ProductInfoReview: FC<{ id: string | number }> = ({ id }) => {
  const { data } = useQuery(['review', id], () => ReviewService.getReviews(id as number),
    { select: ({ data }) => data });
  const [rating, setRating] = useState(Math.round(data ?
    (data?.reduce((acc, reviews) => acc + reviews.rating, 0) / data.length) : 0,
  ));
  return (data ? (<div className={'item-review'}>
    <h4 className={'font-bold text-xl mt-4'}>Reviews</h4>
    <div className={'flex justify-between'}>
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
      <div className={'w-1/3'}>
        <RatingBar percent={data.filter((review) => review.rating === 5).length / data.length * 100 | 0} text={'5'} />
        <RatingBar percent={data.filter((review) => review.rating === 4).length / data.length * 100 | 0} text={'4'} />
        <RatingBar percent={data.filter((review) => review.rating === 3).length / data.length * 100 | 0} text={'3'} />
        <RatingBar percent={data.filter((review) => review.rating === 2).length / data.length * 100 | 0} text={'2'} />
        <RatingBar percent={data.filter((review) => review.rating === 1).length / data.length * 100 | 0} text={'1'} />
      </div>
    </div>
  </div>) : <></>);
};

export default ProductInfoReview;