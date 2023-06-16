'use client';

import { PropsWithChildren } from 'react';

import AuthProvider from '@/providers/auth-provider/auth-provider';
import PersistGateProvider from '@/providers/persistGate-provider/persistGate-provider';
import QueryProvider from '@/providers/query-provider/query-provider';
import ReduxProviders from '@/providers/redux-provider/redux-provider';

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ReduxProviders>
        {/*<PersistGateProvider>*/}
        <AuthProvider>{children}</AuthProvider>
        {/*</PersistGateProvider>*/}
      </ReduxProviders>
    </QueryProvider>
  );
}
