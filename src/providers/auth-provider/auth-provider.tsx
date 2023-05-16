'use client';
import { FC, PropsWithChildren, useEffect } from 'react';
import { TypeCompnentAuthFields } from '@/providers/auth-provider/auth-page.types';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { usePathname } from 'next/navigation';
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });
const AuthProvider: FC<PropsWithChildren<TypeCompnentAuthFields>> = (
  {
    Component: {
      isOnlyUser,
    }, children,
  },
) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const pathname = usePathname()

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);


  return isOnlyUser ? <DynamicCheckRole Component={{ isOnlyUser }}>
      {children}
    </DynamicCheckRole> :
    <>{children}</>;
};

export default AuthProvider;
