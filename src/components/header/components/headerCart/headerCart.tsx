'use client';
import React from 'react';
import { useModal } from '@/hooks/useModal';
import { useCart } from '@/hooks/useCard';
import SquareButton from '@/components/button/squareButton';
import { RiShoppingCartLine } from 'react-icons/all';
import CartItem from '@/components/header/components/headerCart/cart-item/cartItem';

const HeaderCart = () => {
  const { isShowing, setIsShowing, ref } = useModal(false);
  const { items, total } = useCart();
  return (
    <div className={'relative'} ref={ref}>
      <SquareButton Icon={RiShoppingCartLine}
                    number={items.length}
                    onClick={() => setIsShowing(!isShowing)} />
      {isShowing && <div className={'absolute top-10 right-0 bg-white rounded-md shadow-lg p-4'}>
        <div className={'flex justify-between items-center'}>
          <h3 className={'text-lg font-bold'}>Cart</h3>
          <div>{items.length ? (items.map(item => <CartItem item={item} key={item.id}/>)): (<span className={'font-light'}>Cart is empty</span>)}</div>
          <button onClick={() => setIsShowing(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-gray-500 hover:text-gray-700'
                 fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
      </div>}


    </div>
  );
};

export default HeaderCart;