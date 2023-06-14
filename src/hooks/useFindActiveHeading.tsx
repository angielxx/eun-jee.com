import React, { useEffect, useRef, useState } from 'react';

export function useFindActiveHeading(setActiveId) {
  const observer = useRef<IntersectionObserver>();
  const [scrollDir, setScrollDir] = useState<string>('');
  // const visibility;
  // const [activeId, setActiveId] = useState<string>('');
  // const activeId = useRef();

  // 모든 헤딩 아이디 가시성
  const headings: { [key: string]: boolean } = {};

  useEffect(() => {
    const topMargin = 50;

    addEventListener('wheel', (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      setScrollDir(direction);
      console.log('dir :', direction);
    });

    const observerHandler = (entries) => {
      entries.forEach((entry, idx) => {
        headings[entry.target.parentNode.id] = entry.isIntersecting;
        // console.log(headings);
        // console.log(
        //   idx,
        //   ' : ',
        //   entry.target.parentNode.id,
        //   entry.isIntersecting,
        //   entry.boundingClientRect.top
        // );
        // console.log('check :', entry.boundingClientRect.top <= topMargin);
        if (entry.boundingClientRect.top <= topMargin && scrollDir === 'down') {
          setActiveId(entry.target.parentNode.id);
        }
        if (entry.boundingClientRect.top > topMargin && scrollDir === 'up') {
        }
      });
    };

    const observerOption = {
      threshold: 1,
      rootMargin: '0px 0px 0px 0px',
    };

    observer.current = new IntersectionObserver(
      observerHandler,
      observerOption
    );

    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [setActiveId]);

  // return { activeId };
}
