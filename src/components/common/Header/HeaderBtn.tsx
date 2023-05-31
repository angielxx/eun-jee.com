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
  'text-base h-11 flex justify-center items-center px-3 bg-black text-text rounded-[12px]';

const styles: stylesType = {
  default: '',
  active: 'text-p500 font-bold',
  hover: 'hover:bg-grey10',
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
