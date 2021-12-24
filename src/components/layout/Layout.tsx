import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='bg-mnBg'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
