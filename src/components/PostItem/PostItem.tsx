import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div>
      <Link href={post.slug}>
        <p>{post.title}</p>
        <p>{post.description}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  );
};

export default PostItem;
