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
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [headings, setHeadings] = useState<string[]>([]);
  // const [scrollDir, setScrollDir] = useState<string>('');

  // useFindActiveHeading(setActiveId);

  useEffect(() => {
    const tocPin = document.querySelector('#toc-pin');
    const pinPos = tocPin?.getBoundingClientRect().top;

    document.addEventListener('scroll', onScroll, { passive: true });

    function onScroll() {
      const scrollPosition = scrollY + 112;
      if (scrollPosition >= pinPos) setIsFixed(true);
      else setIsFixed(false);
    }
  }, []);

  useEffect(() => {
    let scrollDir: string;
    let prevScrollPos = window.scrollY || document.documentElement.scrollTop;
    window.addEventListener('scroll', () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPos > prevScrollPos) {
        scrollDir = 'down';
      } else if (currentScrollPos < prevScrollPos) {
        scrollDir = 'up';
      }
      prevScrollPos = currentScrollPos;
    });

    const handler = (entries) => {
      entries.forEach((entry) => {
        if (scrollDir === 'down' && entry.isIntersecting) {
          setActiveId(entry.target.parentNode.id);
        }
        if (scrollDir === 'up' && !entry.isIntersecting) {
          const currentIdx = post.headings.findIndex(
            (heading) => heading.slug === entry.target.parentNode.id
          );
          if (currentIdx !== 0) setActiveId(post.headings[currentIdx - 1].slug);
        }
      });
    };

    const option = {
      threshold: 1,
      rootMargin: `0px 0px -${window.innerHeight - 47}px 0px`,
    };

    const observer = new IntersectionObserver(handler, option);
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const basicStyle = 'text-subtext hover:text-p400 text-sm leading-2';
  const fixedStyle = isFixed ? 'fixed top-[112px]' : '';

  return (
    <div id="toc" className={`${fixedStyle} w-[224px] py-4 px-8 top-1`}>
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
