'use client';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { usePathname } from 'next/navigation';
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper';
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const Children = <>{children}</>;

  if (user && isProtectedRoute) {
    return Children;
  }

  router.pathname !== '/auth' && router.replace('/auth');
  return null;

};

export default AuthProvider;
