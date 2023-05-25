'use client';
import React, { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useAuth } from '@/hooks/useAuth';

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();
  const queryCache = useQueryClient();
  const { mutate } = useMutation(['toggle favorite'],
    () => UserService.toggleFavorite(productId),
    {
      onSuccess() {
        queryCache.invalidateQueries(['get profile']);
      },
    });
  const isExists = profile?.favorits.some(
    (favorite) => favorite.id === productId,
  );

  return (
    <>
      <button className={'absolute right-2 top-2 text-2xl'} onClick={() => mutate()}>
        {isExists ? <AiFillHeart className={'text-themeColor'}/> : <AiOutlineHeart />}
      </button>
    </>
  );
};

export default FavoriteBtn;
