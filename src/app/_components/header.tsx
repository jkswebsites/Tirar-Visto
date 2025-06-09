import Image from 'next/image';
import React from 'react';
import imgLogo from '@/assets/images/logo-tirar-visto1.png';
import Navbar from './navbar';

const Header = () => {
  return (
    <header className="flex h-[6.25rem] w-[41.125rem] items-center px-[3.75rem]">
      <Image src={imgLogo} alt="logo tirar visto" width={152} height={42} />
      <Navbar />
    </header>
  );
};

export default Header;
