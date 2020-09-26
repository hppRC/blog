import React from 'react';
import Div100vh from 'react-div-100vh';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <Div100vh className='flex flex-col'>
    <Header />
    <main className='flex-grow max-w-screen-xl w-full mx-auto px-2'>{children}</main>
    <Footer />
  </Div100vh>
);
