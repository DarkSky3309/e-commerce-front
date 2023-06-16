'use client';

import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const input = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const redirect = () => {
    if (input.current?.value) {
      pathname !== '/q' &&
        window.location.replace(`/q?term=${input.current?.value}`);
    }
  };

  return (
    <div className={'relative'}>
      <input
        ref={input}
        className={
          'bg-black rounded-md py-2 px-4 text-white w-full outline-none'
        }
      ></input>
      <div
        className={
          'absolute text-white right-0 bottom-0 bg-themeColor rounded-md py-2 px-3'
        }
      >
        <AiOutlineSearch
          className={'text-2xl hover:scale-125 transition cursor-pointer'}
          onClick={redirect}
        />
      </div>
    </div>
  );
};

export default SearchBar;
