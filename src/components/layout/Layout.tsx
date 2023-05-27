import React, { FC, PropsWithChildren } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={'grid grid-cols-2'} style={
        {
          gridTemplateColumns: '1fr 4fr',
        }
      }>
        <Sidebar />
        <main className={'p-8'}>{children}</main>
      </div>
    </>
  );
};

export default Layout;