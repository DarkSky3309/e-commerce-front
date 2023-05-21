import { NextPage } from 'next';
import Auth from '@/components/auth/Auth';

export const metadata = {
  title: 'Auth',
}
const AuthPage: NextPage = () => {
  return <><Auth/></>;
};

export default AuthPage;