import React, { FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/amazon_logo.svg';

const Header :FC = () => {
  return (
    <header className={'bg-secondaryColor h-20 flex items-center px-10'}>
      <Image alt={'logo'} src={logo} width={100} height={100}/>
    </header>
  );
};

export default Header;