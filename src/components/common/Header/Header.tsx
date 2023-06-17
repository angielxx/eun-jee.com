'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import HeaderBtn from './HeaderBtn';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="xl:w-[75%] md:w-[85%] w-[90%] flex justify-between my-8">
      <div className="flex gap-2">
        <HeaderBtn
          href="/"
          title="Home"
          status={pathname === '/' ? 'active' : 'default'}
        />
        <HeaderBtn
          href="/category"
          title="Blog"
          status={pathname.startsWith('/category') ? 'active' : 'default'}
        />
        {/* <HeaderBtn
          href="/guestbook"
          title="Guestbook"
          status={pathname.startsWith('/guestbook') ? 'active' : 'default'}
        /> */}
      </div>
      <div className="flex gap-2">
        <SearchBar />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
