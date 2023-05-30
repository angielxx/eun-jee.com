'use client';

import React from 'react';

interface PageContentProps {
  content: string;
}

const PageContent = ({ content }: PageContentProps) => {
  return <p>{content}</p>;
};

export default PageContent;
