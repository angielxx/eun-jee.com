import { Post } from 'contentlayer/generated';
import React from 'react';

interface TocProps {
  post: Post;
}

const Toc = ({ post }: TocProps) => {
  const classByLevel =
    'data-[level=One]:pl-1 data-[level=Two]:pl-2 data-[level=Three]:pl-3 data-[level=Four]:pl-4 data-[level=Five]:pl-5 data-[level=Six]:pl-6';
  return (
    <div className="absolute w-[300px] ml-8">
      <h3>On this page</h3>
      <div>
        {post.headings.map((heading: any) => {
          return (
            <div key={`#${heading.slug}`}>
              <a
                data-level={heading.level}
                href={`#${heading.slug}`}
                className={classByLevel}
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
