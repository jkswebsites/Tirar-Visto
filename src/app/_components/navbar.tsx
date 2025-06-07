import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="ml-[6px] space-x-[4px] py-3 text-base text-neutral-800 [&>a]:px-[10px] [&>a]:text-center">
      <Link href={'/'} className="text-shadow-md font-bold">
        Home
      </Link>
      <Link href={'/about-us'}>Quem somos</Link>
      <Link href={'/'}>Serviços</Link>
      <Link href={'/contact-us'}>Contato</Link>
    </nav>
  );
};

export default Navbar;
