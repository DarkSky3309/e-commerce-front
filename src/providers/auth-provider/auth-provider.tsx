'use client';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { usePathname } from 'next/navigation';
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper';
import { useRouter } from 'next/navigation';
import { protectedRoutes } from '@/providers/auth-provider/protected-routes.data';

const AuthProvider: FC<PropsWithChildren> = (
  {
    children,
  },
) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const pathname = usePathname();
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const router = useRouter();
  const Children = <>{children}</>;

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



  useEffect(() => {
    pathname !== '/auth' && router.replace('/auth');
  }, [user, pathname]);
  if (user && isProtectedRoute) {
    return <>{Children}</>;
  }
  if (!isProtectedRoute) {
    return <>{Children}</>;
  }
  return null

};

export default AuthProvider;
