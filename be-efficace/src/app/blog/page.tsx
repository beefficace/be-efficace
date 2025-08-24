import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <PageLayout title="Le Labo">
      <p className="mb-8">
        Un laboratoire d'idées, un carnet d'explorations. C'est ici que nous testons,
        partageons et affinons notre compréhension de la complexité.
      </p>
      <section>
        <ul>
          {allPosts.map(({ slug, title, date, category }) => (
            <li key={slug} className="mb-6">
              <Link href={`/blog/${slug}`}>
                <h2 className="text-2xl font-bold text-deep-blue hover:underline">{title}</h2>
              </Link>
              <div className="text-gray-500 text-sm">
                <span>{date}</span> | <span>{category}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
