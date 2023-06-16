import { NextPage } from 'next';

import Auth from '@/components/auth/Auth';

export const metadata = {
  title: 'Auth | E-commerce',
  description: 'My E-commerce app',
};
const AuthPage: NextPage = () => {
  return (
    <>
      <Auth />
    </>
  );
};

export default AuthPage;
