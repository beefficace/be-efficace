import { getPostData, getSortedPostsData } from '@/lib/posts';
import PageLayout from '@/components/PageLayout';

type Params = {
  slug: string;
};

export default async function Post({ params }: { params: Params }) {
  const postData = await getPostData(params.slug);

  return (
    <PageLayout title={postData.title}>
      <div className="text-gray-500 text-sm mb-4">
        <span>{postData.date}</span> | <span>{postData.category}</span>
      </div>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </PageLayout>
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map(post => ({
    slug: post.slug,
  }));
}
