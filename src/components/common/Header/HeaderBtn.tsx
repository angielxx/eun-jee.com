import Link from 'next/link';
import React from 'react';

interface HeaderBtnProps {
  href: string;
  title: string;
  status: 'default' | 'active';
}

type stylesType = {
  [key: string]: string;
  default: string;
  active: string;
  hover: string;
};

const commonStyle =
  'text-base h-11 flex justify-center px-4 py-3 bg-black text-p100';

const styles: stylesType = {
  default: '',
  active: '',
  hover: 'hover:bg-grey30',
};

const HeaderBtn = ({ href, title, status }: HeaderBtnProps) => {
  return (
    <div className={`${commonStyle} ${styles[status]} ${styles['hover']}`}>
      <Link href={href}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default HeaderBtn;
