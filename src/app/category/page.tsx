import CategoryTitle from '@/components/CategoryPage/CategoryTitle';
import PostItemList from '@/components/PostItem/PostItemList';
// import { getAllCategories } from '@/lib/getAllCategories';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'eun-jee.com',
  description: '웹 프론트엔드 개발자 이은지의 개발 블로그',
  openGraph: {
    type: 'website',
    title: 'eun-jee.com',
    description: '웹 프론트엔드 개발자 이은지의 개발 블로그',
    locale: 'ko-KR',
    siteName: 'eun-jee.com',
    url: 'https://eun-jee.com/category/',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: 'eun-jee.com',
    description: '웹 프론트엔드 개발자 이은지의 개발 블로그',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function Category() {
  // const [categories, subcategories] = getAllCategories();

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
