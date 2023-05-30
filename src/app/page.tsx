import PageContent from '@/components/common/PageContent';
import PageTitle from '@/components/common/PageTitle';
import Image from 'next/image';

import { allPosts } from 'contentlayer/generated';
import PostItem from '@/components/PostItem/PostItem';

export default function Home() {
  return (
    <>
      <PageTitle title="Eunjee Lee" />
      <div>
        <p>안녕하세요, 웹 프론트엔드 개발자 이은지입니다.</p>
        <p>이곳은 개발자로서 저의 성장 기록을 쌓아가는 공간입니다.</p>
        <p>저에 대해 더 알고 싶다면 아래 링크를 참고해주세요.</p>
      </div>
      <div>
        <a href="">resume</a>
        <a href="">portfolio</a>
      </div>
      <div>
        <p>
          최근 게시물 <span>{allPosts.length}</span>
        </p>
        {allPosts.map((post, idx) => (
          <PostItem post={post} key={idx} />
        ))}
      </div>
    </>
  );
}
