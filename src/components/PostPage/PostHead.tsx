import { useDateFormat } from '@/hooks/useDateFormat';
import { Post } from 'contentlayer/generated';
import React from 'react';

interface PostHeadProps {
  post: Post;
}

const PostHead = ({ post }: PostHeadProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border-b-[1px] pb-6 border-grey10">
      <p className="text-5xl font-bold h-fit leading-snug break-keep">
        {post.title}
      </p>
      <div className="flex text-subtext gap-3">
        <div className="flex gap-2 items-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-subtext relative bottom-[2px]"
          >
            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
          </svg>
          <span>{useDateFormat(post.date)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-subtext"
          >
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <span>{post.readingTime}분</span>
        </div>
      </div>
    </div>
  );
};

export default PostHead;
