import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className='flex-1 max-w-screen-xl w-full mx-auto p-2 pt-12 lg:pt-16 lg:px-4'>{children}</main>
    <Footer />
  </>
);
