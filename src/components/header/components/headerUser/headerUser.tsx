'use client';

import Image from 'next/image';
import React, { FC } from 'react';

import { useProfile } from '@/hooks/useProfile';

const HeaderUser: FC = () => {
  const { profile } = useProfile();
  return (
    <>
      {profile?.avatarPath && (
        <Image
          className={'rounded-full border-themeColor border border-solid'}
          src={profile.avatarPath}
          alt={'profile'}
          width={43}
          height={43}
        />
      )}
    </>
  );
};

export default HeaderUser;
