import React, { FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/amazon_logo.svg';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchBar from '@/components/header/components/searchBar/searchBar';
import HeaderCart from '@/components/header/components/headerCart/headerCart';

const Header: FC = () => {
  return (
    <header className={'bg-secondaryColor h-20 grid items-center px-10 grid-cols-header'}>
      <Link href={'/'}>
        <Image alt={'logo'} src={logo} width={100} height={100} />
      </Link>
      <SearchBar/>
      <div className={'flex justify-end gap-3'}>

        <Link href={'/favorites'}>
          <HeaderCart/>
          <AiOutlineHeart className={'text-white text-xl'} />
        </Link>
      </div>
    </header>
  );
};

export default Header;