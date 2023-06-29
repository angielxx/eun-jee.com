import PageTitle from '@/components/common/PageTitle';
import { allPosts } from 'contentlayer/generated';
import PostItem from '@/components/PostItem/PostItem';
import ContentWrapper from '@/components/common/ContentWrapper';
import LinkTag from '@/components/common/LinkTag';
import PageBody from '@/components/common/PageBody';
import CategoryTitle from '@/components/CategoryPage/CategoryTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '안녕하세요, 웹 프론트엔드 개발자 이은지입니다. 이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.',
  openGraph: {
    type: 'website',
    title: '웹 프론트엔드 개발자 이은지의 개발 블로그',
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
    title: '웹 프론트엔드 개발자 이은지의 개발 블로그',
    description: '이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.',
    // card: '',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <PageTitle title="Eunjee Lee" />
        <PageBody>
          <p>안녕하세요, 웹 프론트엔드 개발자 이은지입니다.</p>
          <p>이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.</p>
          <p>저에 대해 더 알고 싶다면 아래 링크를 참고해주세요.</p>
        </PageBody>
        <div className="flex gap-4">
          {/* <LinkTag href="" text="resume" /> */}
          <LinkTag href="https://angielee.oopy.io/" text="portfolio" />
        </div>
      </ContentWrapper>
      <div className="flex flex-col gap-2">
        <CategoryTitle title="최근 게시물" count={allPosts.length} />
        {allPosts.map((post, idx) => (
          <PostItem post={post} key={idx} />
        ))}
      </div>
    </>
  );
}
