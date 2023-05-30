import React from 'react';
import { useModal } from '@/hooks/useModal';
import { useCart } from '@/hooks/useCard';

const HeaderCart = () => {
  const { isShowing, setIsShowing, ref } = useModal(false);
  const { items, total } = useCart();
  return (
    <div>
      
    </div>
  );
};

export default HeaderCart;