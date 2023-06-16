'use client';

import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import { useCart } from '@/hooks/useCard';
import { useModal } from '@/hooks/useModal';

import SquareButton from '@/components/button/squareButton';
import CartItem from '@/components/header/components/headerCart/cart-item/cartItem';

const HeaderCart = () => {
  const { isShowing, setIsShowing, ref } = useModal(false);
  const { items, total } = useCart();
  return (
    <div className={'relative transition'} ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        number={items.length}
        onClick={() => setIsShowing(!isShowing)}
      />
      {isShowing && (
        <div
          className={
            'absolute min-h-100 z-10 top-16 right-0 bg-black text-white rounded-md shadow-lg p-4'
          }
        >
          <div
            className={
              'flex flex-col min-w-140 w-80 justify-between items-center  mt-6'
            }
          >
            <h3 className={'text-lg font-bold absolute top-2 left-2'}>Cart</h3>
            <div>
              {items.length ? (
                items.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <span className={'font-light'}>Cart is empty</span>
              )}
            </div>
            <button
              onClick={() => setIsShowing(false)}
              className={'absolute top-2 right-2'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className={'flex justify-center items-center w-full mt-4'}>
              <span className={'text-lg font-bold'}>Total: </span>
              <span className={'text-lg font-bold'}> {total}$</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCart;
