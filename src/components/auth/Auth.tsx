'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/components/button/button';
import Heading from '@/components/heading/heading';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEmailPassword } from '@/store/user/user.inteface';

const Auth = () => {

  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const [type, setType] = useState<'login' | 'register'>('login');
  const { register: formRegister, handleSubmit, formState, reset } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit:SubmitHandler<IEmailPassword> = (data) => {
    type === 'login' ? login(data) : register(data);
    reset();
  }


  return (
    <>
      <Heading className={'capitalize'}>{type}</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Button color={'orange'}>Lets go!</Button>
      </form>

    </>
  );
};

export default Auth;