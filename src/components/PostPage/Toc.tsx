'use client';

import { useFindActiveHeading } from '@/hooks/useFindActiveHeading';
import { Post } from 'contentlayer/generated';
import React, { useEffect, useRef, useState } from 'react';

interface TocProps {
  post: Post;
}

type levelType = 'One' | 'Two' | 'Three' | 'Four' | 'Five' | 'Six';
interface paddingType {
  [key: string]: number;
}

const Toc = ({ post }: TocProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState([]);
  const target = useRef<HTMLDivElement>(null);

  useFindActiveHeading(setActiveId);

  useEffect(() => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('activeId :', activeId);
  }, []);

  const basicStyle = 'text-subtext hover:text-p400 text-sm leading-2';

  return (
    <div id="toc" className="fixed w-[224px] ml-10 py-1 px-4 top-1">
      <p className="text-sm font-bold mb-1">On this page</p>
      <ul>
        {post.headings.map((heading: any) => {
          const level: levelType = heading.level;
          const padding: paddingType = {
            One: 1,
            Two: 2,
            Three: 3,
            Four: 4,
            Five: 5,
            Six: 6,
          };
          let classByLevel = `pl-${padding[level]}`;
          const highlightStyle = `${
            activeId === heading.slug ? 'font-bold text-p400' : ''
          }`;
          console.log('here', heading.slug);
          console.log('here2', activeId === heading.slug);
          return (
            <li key={`#${heading.slug}`} className={classByLevel}>
              <a
                data-level={heading.level}
                href={`#${heading.slug}`}
                className={`${basicStyle} ${highlightStyle}`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Toc;
