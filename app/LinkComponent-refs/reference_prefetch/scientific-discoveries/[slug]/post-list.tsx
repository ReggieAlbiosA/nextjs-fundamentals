import Link from 'next/link';

interface Post {
    id: number
    title: string
    parentSlug?: string
    childSlug: string
}
   
export function PostList({ posts }: { posts: Post[] }) {
    return (
        <ul className='list-disc pl-[20px] text-[1.3rem]'>
        {posts.map((post) => (
            <li key={post.id}>
            <Link className='hover:underline' href={`/LinkComponent-refs/reference_prefetch/scientific-discoveries/${post.parentSlug}/${post.childSlug}`}>{post.title}</Link>
            </li>
        ))}
        </ul>
    )
}