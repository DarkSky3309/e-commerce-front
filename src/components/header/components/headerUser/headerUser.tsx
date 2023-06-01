import React, { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';
import Image from 'next/image';

const HeaderUser :FC = () => {
  const { profile } = useProfile()
  return (
    <>
      {profile?.avatarPath && (
        <Image className={'rounded-full border-themeColor border border-solid animate-opacity'}
               src={profile.avatarPath}
               alt={"profile"}
               width={43}
               height={43}/>
      )}
    </>
  );
};

export default HeaderUser;