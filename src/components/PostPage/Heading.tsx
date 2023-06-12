'use client';

import { usePathname } from 'next/navigation';
import React, { useReducer, useState } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  id: string;
  tag: string;
}

interface ElementsType {
  [key: string]: React.ReactNode;
}

const Heading = ({ children, id, tag }: HeadingProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const pathname = usePathname();
  const commonStyle = 'hover:text-p500 flex gap-2 items-center justify-center';

  const copylink = () => {
    navigator.clipboard.writeText(
      'http://localhost:3000' + pathname + `#${id}`
    );
  };

  const Inner = () => {
    return (
      <span
        className={`${
          isHover ? 'opacity-1' : 'opacity-0'
        }  h-4 -left-8 cursor-pointer transition-opacity duration-100 ease-in-out`}
        onClick={copylink}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="h-4 fill-p300"
        >
          <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
        </svg>
      </span>
    );
  };

  const elements: ElementsType = {
    1: (
      <h1
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h1>
    ),
    2: (
      <h2
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h2>
    ),
    3: (
      <h3
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h3>
    ),
    4: (
      <h4
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h4>
    ),
    5: (
      <h5
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h5>
    ),
    6: (
      <h6
        className={commonStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
        <Inner />
      </h6>
    ),
  };

  return (
    <div className="relative">
      <a href={`#${id}`} id={id} className="no-underline hover:text-p500 flex">
        {elements[tag]}
      </a>
      <div className="absolute"></div>
    </div>
  );
};

export default Heading;
