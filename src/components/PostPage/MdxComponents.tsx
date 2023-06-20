import React, { DetailedHTMLProps, useState } from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Heading from './Heading';
// import h1 from './h1';

const components: MDXComponents = {
  // h1?: Component<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> | undefined
  h1: ({ children, id }) => (
    <Heading id={id} tag="1">
      {children}
    </Heading>
  ),
  h2: ({ children, id }) => (
    <Heading id={id} tag="2">
      {children}
    </Heading>
  ),
  h3: ({ children, id }) => (
    <Heading id={id} tag="3">
      {children}
    </Heading>
  ),
  h4: ({ children, id }) => (
    <Heading id={id} tag="4">
      {children}
    </Heading>
  ),
  h5: ({ children, id }) => (
    <Heading id={id} tag="5">
      {children}
    </Heading>
  ),
  h6: ({ children, id }) => (
    <Heading id={id} tag="6">
      {children}
    </Heading>
  ),
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
