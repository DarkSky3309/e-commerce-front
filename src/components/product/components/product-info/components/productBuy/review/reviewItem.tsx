import React, { FC, useEffect, useState } from 'react';
import { IReview } from '@/types/review.interface';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';

const ReviewItem: FC<{ review: IReview }> = ({ review}) => {
  const time = new Date(review.createdAt);
  return (
    <div className={'flex gap-3 flex-col'}>
      <div className={'flex gap-4 items-center'}>
        <Image src={review.user.avatarPath} alt={review.user.name} width={50} height={50} className={'rounded-full'} />
        <span className={'font-bold'}>{review.user.name}</span>
        <span className={'text-gray'}> - {time.toLocaleString()}</span>
      </div>
      <Rating className={'pb-1'}
              readonly
              initialValue={review.rating}
              SVGstyle={{ display: 'inline-block' }}
              size={18}
              allowFraction
              transition
      />
      <span>{review.text}</span>
    </div>
  );
};

export default ReviewItem;