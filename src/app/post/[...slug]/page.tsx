import MdxComponents from '@/components/PostPage/MdxComponents';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import PostHead from '@/components/PostPage/PostHead';
import Toc from '@/components/PostPage/Toc';
import { Metadata } from 'next';

interface PostDetailProps {
  params: {
    slug: string[];
  };
}

export function generateMetadata({ params }: PostDetailProps): Metadata {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return {
    title: post?.title,
    description: post?.description,
    authors: [{ name: 'Eunjee Lee', url: 'https://angielee.oopy.io/' }],
    openGraph: {
      type: 'article',
      title: post?.title,
      description: post?.description,
      locale: 'ko-KR',
      siteName: 'eun-jee.com',
      // url: '',
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      title: post?.title,
      description: post?.description,
      // card: '',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

export default function PostPage({ params }: PostDetailProps) {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);
  // console.log('params :', params);
  // console.log(post?.slug, post?.slugAsParams);

  if (!post) notFound();

  return (
    <article className="relative">
      <PostHead post={post} />
      <div className="absolute left-[100%]" id="toc-pin">
        <Toc post={post} />
      </div>
      <MdxComponents code={post.body.code} />
    </article>
  );
}
