'use client';

import { useFindActiveHeading } from '@/hooks/useFindActiveHeading';
import { Post } from 'contentlayer/generated';
import React, { useEffect, useRef, useState } from 'react';

interface TocProps {
  post: Post;
}

type levelType = 'One' | 'Two' | 'Three' | 'Four' | 'Five' | 'Six';
interface paddingType {
  [key: string]: string;
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
          console.log(entry.target.parentNode.id);
        }
        if (scrollDir === 'up' && !entry.isIntersecting) {
          const currentIdx = post.headings.findIndex(
            (heading) => heading.slug === entry.target.parentNode.id
          );
          if (currentIdx !== 0) {
            setActiveId(post.headings[currentIdx - 1].slug);
            console.log(post.headings[currentIdx - 1].slug);
          }
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

  const basicStyle = 'text-grey70 hover:text-p400 text-sm leading-none';
  const fixedStyle = isFixed ? 'fixed top-[112px]' : '';

  return (
    <div id="toc" className={`${fixedStyle} w-[240px] py-4 px-8 top-1`}>
      <p className="text-sm font-bold mb-1 text-text">On this page</p>
      <div>
        {post.headings.map((heading: any) => {
          if (heading.level in ['Four', 'Five', 'Six']) return;
          const level: levelType = heading.level;
          const padding: paddingType = {
            One: '',
            Two: 'pl-3',
            Three: 'pl-6',
            Four: 'pl-6',
            Five: 'pl-5',
            Six: 'pl-6',
          };
          const highlightStyle = `${
            activeId === heading.slug ? 'text-p400 scale-[1.1]' : 'text-grey70'
          } hover:text-p400 text-sm leading-none transition-transform ease-in-out scale-0`;
          return (
            <div key={`#${heading.slug}`} className={padding[level]}>
              <a
                data-level={heading.level}
                href={`#${heading.slug}`}
                className={highlightStyle}
              >
                {heading.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toc;
