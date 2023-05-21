import '../assets/style/globals.scss';
import AppProviders from '@/providers/providers';
import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'e-commerce',
  description: 'My E-commerce app',
}

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
