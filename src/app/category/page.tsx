import CategoryTitle from '@/components/CategoryPage/CategoryTitle';
import PostItemList from '@/components/PostItem/PostItemList';
import { getAllCategories } from '@/lib/getAllCategories';
import { allPosts } from 'contentlayer/generated';

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
