
import ScientificDiscoveries from '@/metadata/scientific-discoveries.json';
import { PostList } from './post-list';

export default function Page() {
    return (
        <section className='w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]'>  
            <div> 
                <h1 className='font-bold text-[2rem]'>Scientific Discovery</h1>
                <hr className='border-b-[2px] border-[#222126]'/>
            </div>

            <div>
                <PostList posts={ScientificDiscoveries.ScientificDiscoveries_static}></PostList>
            </div>
        </section>
    );
}
