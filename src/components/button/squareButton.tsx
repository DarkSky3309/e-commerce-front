'use client';

import React, { FC, useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface ISquareButton {
  Icon: IconType;
  onClick?: () => void;
  number?: number;
}

const SquareButton: FC<ISquareButton> = ({ Icon, number, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return isLoaded ? (
    <button
      onClick={onClick}
      className="h-10 w-10 bg-themeColor flex items-center justify-center
                   hover:bg-themeColor/90 transition-colors duration-200
                   relative rounded"
    >
      {!!number && (
        <span
          className="absolute -top-1 -right-1 bg-black rounded-full text-white
                           w-4 h-4 flex items-center justify-center text-xs"
        >
          {number}
        </span>
      )}
      <Icon className={'text-secondaryColor'} size={21} />
    </button>
  ) : (
    <></>
  );
};

export default SquareButton;
