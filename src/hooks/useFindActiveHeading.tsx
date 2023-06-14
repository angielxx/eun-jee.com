import React, { useEffect, useRef, useState } from 'react';

export function useFindActiveHeading(setActiveId) {
  const observer = useRef<IntersectionObserver>();
  // const [activeId, setActiveId] = useState<string>('');
  // const activeId = useRef();

  useEffect(() => {
    const observerHandler = (entries) => {
      entries.forEach((entry) => {
        // console.log('entry', entry);
        if (entry?.isIntersecting) {
          setActiveId(entry.target.parentNode.id);
        }
      });
    };

    const observerOption = {
      threshold: 1,
      rootMargin: '-76px 0px 0px 0px',
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
