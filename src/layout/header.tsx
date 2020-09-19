import { Link } from 'gatsby';
import React from 'react';

export const Header: React.FC = () => (
  <header className='top-0 border-b w-full h-12 lg:h-16 lg:px-4'>
    <nav className='flex h-full max-w-screen-xl mx-auto items-center justify-between'>
      <Link to='/' className=''>
        <h1 className='font-bold text-2xl lg:text-2xl'>hpp blog</h1>
      </Link>
    </nav>
  </header>
);
