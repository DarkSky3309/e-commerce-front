import '../assets/style/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import QueryProvider from '@/providers/query-provider/query-provider';
import ReduxProviders from '@/providers/redux-provider/redux-provider';
import PersistGateProvider from '@/providers/persistGate-provider/persistGate-provider';
import AuthProvider from '@/providers/auth-provider/auth-provider';
import AppProviders from '@/providers/providers';
import { PropsWithChildren } from 'react';



export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
    <head></head>
    <body>
    <AppProviders>
      {children}
    </AppProviders>
    </body>
    </html>
  );
}
