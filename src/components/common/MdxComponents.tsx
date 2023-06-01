import React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  Image,
};

interface MdxComponentsProps {
  code: string;
}

const MdxComponents = ({ code }: MdxComponentsProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MdxComponents;
