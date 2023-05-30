import React from 'react';
import Link from 'next/link';
import HeaderBtn from './HeaderBtn';

const Header = () => {
  return (
    <header className="flex">
      <HeaderBtn href="/" title="Home" />
      <HeaderBtn href="/blog" title="Blog" />
      <HeaderBtn href="/guestbook" title="Guestbook" />
    </header>
  );
};

export default Header;
