import Title from '@/components/PostDetail/Title';
import MdxComponents from '@/components/common/MdxComponents';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
      <Title title={post.title} />
      <span>{post.date}</span>
      <span>{post.readingTime}분</span>
      <MdxComponents code={post.body.code} />
    </article>
  );
}
