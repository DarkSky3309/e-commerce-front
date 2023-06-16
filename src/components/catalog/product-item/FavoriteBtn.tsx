'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useProfile } from '@/hooks/useProfile';

import { UserService } from '@/services/user.service';

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();
  const queryCache = useQueryClient();
  const { mutate } = useMutation(
    ['toggle favorite'],
    () => UserService.toggleFavorite(productId),
    {
      onSuccess() {
        queryCache.invalidateQueries(['get profile']);
      },
    }
  );
  const isExists = profile?.favorits.some(
    (favorite) => favorite.id === productId
  );

  return (
    <>
      {profile && (
        <button className={'text-2xl'} onClick={() => mutate()}>
          {isExists ? (
            <AiFillHeart className={'text-themeColor'} />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      )}
    </>
  );
};

export default FavoriteBtn;
