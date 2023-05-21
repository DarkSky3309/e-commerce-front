'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/components/button/button';
import Heading from '@/components/heading/heading';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEmailPassword } from '@/store/user/user.inteface';
import Field from '@/components/input/field';

const Auth = () => {

  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const [type, setType] = useState<'login' | 'register'>('login');
  const { register: formRegister, handleSubmit, formState: { errors }, reset } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    type === 'login' ? login(data) : register(data);
    reset();
  };

  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  return (
    <>
      <section className={'flex w-screen items-center justify-center h-screen'}>
        <form onSubmit={handleSubmit(onSubmit)} className={'rounded-lg bg-white shadow-md p-8 flex justify-between flex-col w-1/3 min-w-360'}>
          <Heading className={'capitalize text-center'}>{type}</Heading>
          <Field {...formRegister('email', {
            required: 'Email is required',
            pattern: {
              value: validEmail,
              message: 'Invalid email',
            },
          })} title={'Email'} error={errors.email?.message} placeholder={'youremail@gmail.com'} />

          <Field {...formRegister('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })} title={'Password'} type={'password'} error={errors.password?.message} placeholder={'Please, enter your password'}/>
          <Button className={'mt-6'} color={'orange'}>Lets go!</Button>
        </form>
      </section>

    </>
  );
};

export default Auth;