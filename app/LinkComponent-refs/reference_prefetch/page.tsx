
import Link from 'next/link';
import ScientificDiscoveries from '@/metadata/scientific-discoveries.json';


interface Post {
    id: number;
    title: string;
    slug: string;
}
   
export function PostList({ posts }: { posts: Post[] }) {
    
    return (
        <ul className='list-disc pl-[20px] text-[1.3rem]'>
            {posts.map((post) => {
                const linkPath = `/LinkComponent-refs/reference_prefetch/scientific-discoveries/${post.slug}`;

                return (
                    <li key={post.id}>
                        <Link 
                            className={`hover:underline`}
                            href={linkPath}
                        >
                            {post.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default function Page() {
    return (
        <section className='w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]'>  
            <div> 
                <h1 className='font-bold text-[2rem]'>Scientific Discovery</h1>
                <hr className='border-b-[2px] border-[#222126]'/>
            </div>

            <div>
                <PostList posts={ScientificDiscoveries.ScientificDiscoveries_static} />
            </div>
        </section>
    );
}
