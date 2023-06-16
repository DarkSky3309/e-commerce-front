import React, { FC } from 'react';

const RatingBar: FC<{ percent: number; text: string }> = ({
  percent,
  text,
}) => {
  return (
    <div className={'flex items-center gap-2'}>
      <span>{text}</span>
      <div className={'relative w-full h-2 bg-gray rounded'}>
        <div
          className={'absolute h-full bg-themeColor transition rounded'}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span>{percent}%</span>
    </div>
  );
};

export default RatingBar;
