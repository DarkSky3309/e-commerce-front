import React, { FC, PropsWithChildren } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className={'min-h-screen-80 grid'} style={
        {
          gridTemplateColumns: '20% 80%',
        }
      }>
        <Sidebar />
        <main className={'p-8 grid col-start-2 mt-20'}>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;