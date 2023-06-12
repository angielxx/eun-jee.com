import PageContent from '@/components/common/ContentWrapper';
import PageTitle from '@/components/common/PageTitle';
import Image from 'next/image';

import { allPosts } from 'contentlayer/generated';
import PostItem from '@/components/PostItem/PostItem';
import ContentWrapper from '@/components/common/ContentWrapper';
import LinkTag from '@/components/common/LinkTag';

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <PageTitle title="Eunjee Lee" />
        <div className="tracking-tight">
          <p>안녕하세요, 웹 프론트엔드 개발자 이은지입니다.</p>
          <p>이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.</p>
          <p>저에 대해 더 알고 싶다면 아래 링크를 참고해주세요.</p>
        </div>
        <div className="flex gap-4">
          {/* <LinkTag href="" text="resume" /> */}
          <LinkTag href="https://angielee.oopy.io/" text="portfolio" />
        </div>
      </ContentWrapper>
      <div className="flex flex-col gap-2">
        <p>
          최근 게시물 <span className="text-grey50">{allPosts.length}</span>
        </p>
        {allPosts.map((post, idx) => (
          <PostItem post={post} key={idx} />
        ))}
      </div>
    </>
  );
}
