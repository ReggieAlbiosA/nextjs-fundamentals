// import { PostList } from './post-list';
import Link from 'next/link';
import { scientificDiscoveriesCategoryTopics } from '@/metadata/scientific-discoveries-category-topics';

// ✅ Generate static paths
export async function generateStaticParams() {
  return Object.keys(scientificDiscoveriesCategoryTopics).map((slug) => ({ slug }));
}

// ✅ Using proper Promise handling
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // Await the entire params object first
  const resolvedParams = await params;
  // Then await the slug property
  const slug = resolvedParams.slug;
  
  const pageData = scientificDiscoveriesCategoryTopics[slug];

  if (!pageData) {
    return <p>Page not found</p>;
  }

  return (
    <section className='w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]'>  
      <div>
        <h1 className='font-bold text-[2rem]'>{pageData.header}</h1>
        <hr className='border-b-[2px] border-[#222126]'/>
      </div>

      <div>
      <ul className='list-disc pl-[20px] text-[1.3rem]'>
        {pageData.links.map((post) => (
            <li key={post.id}>
            <Link 
              className='hover:underline' 
              href={`/linking-and-navigating/Link/prefetch/scientific-discoveries/${post.category}/${post.topic}`}
            >
              {post.title}
            </Link>
            </li>
        ))}
        </ul>
      </div>
    </section>
  );
}