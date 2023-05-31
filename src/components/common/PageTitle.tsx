'use client';

import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h3 className="text-3xl font-extrabold text-p500 tracking-wide">{title}</h3>
  );
};

export default PageTitle;
