import React from 'react';
import Image from 'next/image';
import sample from '../common/Sample';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  children: React.ReactNode;
}

const components = {
  Image,
};

interface MdxComponentsProps {
  code: string;
}

const MdxComponents = ({ code }: MdxComponentsProps) => {
  const Component = useMDXComponent(code);
  return (
    <div className="prose dark:prose-invert max-w-none w-full mt-10 mb-[256px]">
      <Component components={components} />
    </div>
  );
};

export default MdxComponents;
