'use client';

import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <h3>{title}</h3>;
};

export default PageTitle;
