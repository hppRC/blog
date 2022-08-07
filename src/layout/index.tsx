import React from 'react';
import Div100vh from 'react-div-100vh';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Div100vh className='flex flex-col'>
    <Header />
    <main className='flex-grow max-w-screen-xl w-full mx-auto px-2 lg:py-16'>{children}</main>
    <Footer />
  </Div100vh>
);
