import React, { FC, PropsWithChildren } from 'react';

import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/Sidebar';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div
        className={'min-h-screen-80 grid'}
        style={{
          gridTemplateColumns: '20% 80%',
        }}
      >
        <Sidebar />
        <main className={'p-8 grid col-start-2 mt-20'}>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
