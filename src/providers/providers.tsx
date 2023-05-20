'use client';
import { PropsWithChildren } from 'react';
import QueryProvider from '@/providers/query-provider/query-provider';
import ReduxProviders from '@/providers/redux-provider/redux-provider';
import PersistGateProvider from '@/providers/persistGate-provider/persistGate-provider';
import AuthProvider from '@/providers/auth-provider/auth-provider';

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ReduxProviders>
        {/*<PersistGateProvider>*/}
          <AuthProvider>
            {children}
          </AuthProvider>
        {/*</PersistGateProvider>*/}
      </ReduxProviders>
    </QueryProvider>
  );
}