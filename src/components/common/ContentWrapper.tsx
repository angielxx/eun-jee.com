'use client';

import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: PageContentProps) => {
  return <div className="py-9 flex flex-col gap-6">{children}</div>;
};

export default ContentWrapper;
