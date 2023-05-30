import React, { FC } from 'react';
import { IconType } from 'react-icons';

interface ISquareButton {
  Icon: IconType;
  onClick?: () => void;
  number?: number;
}

const SquareButton: FC<ISquareButton> = ({ Icon, number, onClick }) => {
  return (
    <button onClick={onClick}
            className='h-10 w-10 bg-themeColor flex items-center justify-center
            hover:bg-themeColor/90 transition-colors duration-200
            relative rounded'>
      {!!number && <span
        className='absolute -top-1 -right-1 bg-red text-white rounded-full
        w-4 h-4 flex items-center justify-center text-xs'>
        {number}
      </span>}
      <Icon className={'text-secondaryColor'} size={21}/>

    </button>
  );
};

export default SquareButton;