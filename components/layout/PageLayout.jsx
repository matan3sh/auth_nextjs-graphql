import React from 'react';

import { Header } from 'components/layout';

const PageLayout = ({ children }) => {
  return (
    <main className='l-main'>
      <Header />
      {children}
    </main>
  );
};

export default PageLayout;
