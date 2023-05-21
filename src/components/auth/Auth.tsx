"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/components/button/button';
import Heading from '@/components/heading/heading';

const Auth = () => {

  return (
    <>
      <Heading>Hello</Heading>
      <Button color={'orange'}>Hello</Button>
    </>
  );
};

export default Auth;