import Title from '@/components/PostPage/Title';
import MdxComponents from '@/components/PostPage/MdxComponents';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import PostHead from '@/components/PostPage/PostHead';
import Toc from '@/components/PostPage/Toc';

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
    <article className="relative">
      <PostHead post={post} />
      <div className="absolute left-[100%]">
        <Toc post={post} />
      </div>
      <MdxComponents code={post.body.code} />
    </article>
  );
}
