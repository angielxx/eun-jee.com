import React from 'react';

interface LinkTagProps {
  href: string;
  text: string;
}

const LinkTag = ({ href, text }: LinkTagProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className="underline text-grey30 font-light hover:text-p300 hover:font-light"
    >
      {text}
    </a>
  );
};

export default LinkTag;
