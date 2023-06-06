// 'use client';

import React, { useState } from 'react';

interface HeadingWrapperProps {
  children: React.ReactNode;
  id: string;
}

const HeadingWrapper = ({ children, id }: HeadingWrapperProps) => {
  // const [hover, setHover] = useState<boolean>(false);

  // const mouseEnterHandler = () => setHover(true);
  // const mouseLeaveHandler = () => setHover(false);

  return (
    <a
      // onMouseEnter={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
      // className="tprose"
      href={`#${id}`}
      id={id}
      className="no-underline hover:text-p500 flex"
    >
      {children}
    </a>
  );
};

export default HeadingWrapper;
