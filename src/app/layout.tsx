import '../assets/style/globals.css';
import { Inter } from 'next/font/google';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';


export const metadata = {
  title: 'E-commerce',
  description: 'Generated by create next app',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <body>{children}</body>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
    </html>
  );
}
