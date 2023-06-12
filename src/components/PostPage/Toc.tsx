'use client';

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
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });
    console.log(post.headings);
  }, []);

  const basicStyle = 'text-subtext hover:text-p400 text-sm leading-2';
  // if (typeof window !== 'object') return;
  // const div = document.querySelector('#toc');
  // console.log('toc top', div);

  return (
    <div id="toc" className="absolute w-[224px] ml-10 py-1 px-4">
      <h3 className="font-medium">On this page</h3>
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

          return (
            <li key={`#${heading.slug}`} className={classByLevel}>
              <a
                data-level={heading.level}
                href={`#${heading.slug}`}
                className={`${basicStyle}`}
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
