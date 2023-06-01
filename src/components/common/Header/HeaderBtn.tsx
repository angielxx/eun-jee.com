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
  'text-base h-11 flex justify-center items-center px-3 bg-black rounded-[12px] tracking-wide';

const styles: stylesType = {
  default: 'text-text',
  active: 'text-p500 font-bold',
  hover: 'hover:bg-grey10',
};

const HeaderBtn = ({ href, title, status }: HeaderBtnProps) => {
  return (
    <Link href={href}>
      <div className={`${commonStyle} ${styles[status]} ${styles['hover']}`}>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default HeaderBtn;
