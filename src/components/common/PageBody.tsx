import React from 'react';

interface PageBodyProps {
  children: React.ReactNode;
}

const PageBody = ({ children }: PageBodyProps) => {
  return <div className="tracking-tight">{children}</div>;
};

export default PageBody;
