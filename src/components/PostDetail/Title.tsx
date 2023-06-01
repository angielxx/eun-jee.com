import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="text-4xl">{title}</h1>;
};

export default Title;
