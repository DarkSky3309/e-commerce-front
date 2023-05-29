import React, { FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/amazon_logo.svg';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={'bg-secondaryColor h-20 grid items-center px-10 grid-cols-header '}>
      <Link href={'/'}>
        <Image alt={'logo'} src={logo} width={100} height={100} />
      </Link>

    </header>
  );
};

export default Header;