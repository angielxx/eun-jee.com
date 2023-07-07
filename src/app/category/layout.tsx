import ContentWrapper from '@/components/common/ContentWrapper';
import PageBody from '@/components/common/PageBody';
import PageTitle from '@/components/common/PageTitle';
// import { getAllCategories } from '@/lib/getAllCategories';
import Image from 'next/image';

interface CategoryMainProps {
  children: React.ReactNode;
}

export default function CategoryMain({ children }: CategoryMainProps) {
  // const [categories, subcategories] = getAllCategories();

  return (
    <div>
      <ContentWrapper>
        <PageTitle title="Blog" />
        <PageBody>
          <p>공유하고 싶거나 기억하고 싶은 내용을 기록합니다.</p>
        </PageBody>
      </ContentWrapper>
      <div>{children}</div>
    </div>
  );
}
