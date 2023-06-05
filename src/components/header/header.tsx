import React, { FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/amazon_logo.svg';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchBar from '@/components/header/components/searchBar/searchBar';
import HeaderCart from '@/components/header/components/headerCart/headerCart';
import HeaderUser from '@/components/header/components/headerUser/headerUser';

const Header: FC = () => {
  return (
    <header className={'fixed w-full bg-secondaryColor h-20 grid items-center px-10 grid-cols-header'}>
      <Link href={'/'}>
        <div className={''}>
          <Image alt={'logo'} src={logo} width={100} height={30}/>
        </div>
      </Link>
      <SearchBar/>
      <div className={'flex justify-end items-center gap-5'}>
        <Link href={'/favorites'}>
          <AiOutlineHeart className={'text-white text-xl'} />
        </Link>
        <HeaderCart/>
        <HeaderUser/>
      </div>
    </header>
  );
};

export default Header;