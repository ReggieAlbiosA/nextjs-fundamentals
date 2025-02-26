import Link from 'next/link';

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