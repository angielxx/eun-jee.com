import CategoryTitle from '@/components/CategoryPage/CategoryTitle';
import PostItemList from '@/components/PostItem/PostItemList';
import { getAllCategories } from '@/lib/getAllCategories';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '안녕하세요, 웹 프론트엔드 개발자 이은지입니다. 이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.',
  openGraph: {
    type: 'website',
    title: '웹 프론트엔드 개발자 이은지 개발 블로그',
    description: '이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.',
    locale: 'ko-KR',
    siteName: 'https://eunjee.vercel.app/',
    // url: '',
    // images: [],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: '웹 프론트엔드 개발자 이은지 개발 블로그',
    description: '이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.',
    // card: '',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function Category() {
  const [categories, subcategories] = getAllCategories();

  return (
    <>
      <CategoryTitle title="모든 게시글" count={allPosts.length} />
      <PostItemList
        posts={allPosts.sort((a, b) => {
          if (a.date > b.date) return -1;
          else if (a.date < b.date) return 1;
          else return 0;
        })}
      />
    </>
  );
}
