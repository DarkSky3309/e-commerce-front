import React, { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/all';

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();
  const { invalidateQueries } = useQueryClient();
  const { mutate } = useMutation(['toggle favorite'],
    () => UserService.toggleFavorite(productId),
    {
      onSuccess() {
        invalidateQueries(['get profile']);
      },
    });

  const isExists = profile?.favorites.some(
    (favorite) => favorite.id === productId,
  );

  return (
    <button onClick={()=> mutate()}>
      {isExists ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default FavoriteBtn;
