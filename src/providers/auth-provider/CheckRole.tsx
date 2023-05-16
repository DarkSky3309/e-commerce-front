import { FC, PropsWithChildren } from 'react';
import { TypeCompnentAuthFields } from '@/providers/auth-provider/auth-page.types';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const CheckRole: FC<PropsWithChildren<TypeCompnentAuthFields>> = ({ Component: { isOnlyuser }, children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const Children = <>{children}</>;

  if (user && isOnlyuser) {
    return Children;
  }

  router.pathname !== '/auth' && router.replace('/auth');
  return null;

};

export default CheckRole;
