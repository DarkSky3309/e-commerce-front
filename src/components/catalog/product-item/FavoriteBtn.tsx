'use client'
import React, { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useAuth } from '@/hooks/useAuth';

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
  // const { user } = useAuth();
  const { profile } = useProfile();
  const { invalidateQueries } = useQueryClient();
  const { mutate } = useMutation(['toggle favorite'],
    () => UserService.toggleFavorite(productId),
    {
      onSuccess() {
        invalidateQueries(['get profile']);
      },
    });
  // // if (!user) return (<></>);
  // if  (!profile) return (<></>);
  // const isExists = profile?.favorits.some(
  //   (favorite) => favorite.id === productId,
  // );

  return (
    <>
      <button onClick={()=> mutate()}>
          {true ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </>
  );
};

export default FavoriteBtn;
