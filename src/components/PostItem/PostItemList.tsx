import { Post } from 'contentlayer/generated';
import React from 'react';
import PostItem from './PostItem';

interface PostItemListProps {
  posts: Post[];
}

const PostItemList = ({ posts }: PostItemListProps) => {
  return (
    <div className="pt-4">
      {posts.map((post, idx) => (
        <PostItem post={post} key={idx} />
      ))}
    </div>
  );
};

export default PostItemList;
