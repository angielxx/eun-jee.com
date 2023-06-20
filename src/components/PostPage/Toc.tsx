'use client';

import { Post } from 'contentlayer/generated';
import React, { useEffect, useState } from 'react';

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
  const [isHover, setIsHover] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const tocPin = document.querySelector('#toc-pin');
    const pinPos = tocPin?.getBoundingClientRect().top;

    document.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', handleShowButton);

    function onScroll() {
      const scrollPosition = scrollY + 112;
      if (pinPos !== undefined && scrollPosition >= pinPos) setIsFixed(true);
      else setIsFixed(false);
    }

    function handleShowButton() {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', handleShowButton);
    };
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

    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (scrollDir === 'down' && entry.isIntersecting) {
          const parentNode = entry.target.parentNode as HTMLElement;
          if (parentNode) setActiveId(parentNode.id);
        }
        if (scrollDir === 'up' && !entry.isIntersecting) {
          const currentIdx = post.headings.findIndex(
            (heading: { level: string; text: string; slug: string }) => {
              const parentNode = entry.target.parentNode as HTMLElement;
              if (parentNode) heading.slug === parentNode.id;
            }
          );
          if (currentIdx !== 0) {
            setActiveId(post.headings[currentIdx - 1].slug);
          }
        }
      });
    };

    const option = {
      threshold: 0.1,
      rootMargin: `0px 0px -${window.innerHeight - 48}px 0px`,
    };

    const observer = new IntersectionObserver(handler, option);
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [post.headings]);

  const fixedStyle = isFixed ? 'fixed top-[112px]' : '';

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="toc"
      className={`${fixedStyle} lg:flex md:hidden hidden w-[240px] mt-4 ml-12 top-1 flex-col gap-4 divide-y divide-grey10`}
    >
      <div>
        <p className="text-sm font-bold mb-1 text-text">On this page</p>
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
                onClick={() => setActiveId(heading.slug)}
              >
                {heading.text}
              </a>
            </div>
          );
        })}
      </div>
      {showButton && (
        <div className="flex items-center gap-1 pt-4">
          <p
            className="text-sm text-grey70 hover:text-p400 cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={scrollTopHandler}
          >
            Scroll to top
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className={`${isHover ? 'fill-p400' : 'fill-grey70'}`}
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Toc;
