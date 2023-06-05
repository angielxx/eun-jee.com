import Title from '@/components/PostPage/Title';
import MdxComponents from '@/components/PostPage/MdxComponents';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PostHead from '@/components/PostPage/PostHead';

interface PostDetailProps {
  params: {
    slug: string[];
  };
}

export default function PostPage({ params }: PostDetailProps) {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return (
    <article>
      <PostHead post={post} />
      <MdxComponents code={post.body.code} />
    </article>
  );
}
