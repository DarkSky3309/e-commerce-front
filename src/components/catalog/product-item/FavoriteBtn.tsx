import React, { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();


  const isExists = profile?.favorites.some(
    (favorite) => favorite.id === productId
  )

  return (
    <div>

    </div>
  );
};

export default FavoriteBtn;
