import '../assets/style/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import QueryProvider from '@/providers/query-provider/query-provider';
import ReduxProviders from '@/providers/redux-provider/redux-provider';
import PersistGateProvider from '@/providers/persistGate-provider/persistGate-provider';
import AuthProvider from '@/providers/auth-provider/auth-provider';



export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <QueryProvider>
      <ReduxProviders>
        {/*<PersistGateProvider>*/}
          {/*FIXME: This can possible be a problem*/}
          <AuthProvider Component={{ isOnlyUser: false }} >
            <body>{children}</body>
          </AuthProvider>
        {/*</PersistGateProvider>*/}
       </ReduxProviders>
     </QueryProvider>
    </html>
  );
}
