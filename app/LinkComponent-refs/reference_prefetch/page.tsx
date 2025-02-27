import Link from 'next/link';
export default function Page() {

    const scientificDiscoveries_static = [
            { "title": "Physics & Space", "slug": "physics-space"},
            { "title": "Biology & Medicine", "slug": "biology-medicine" },
            { "title": "Chemistry", "slug": "chemistry" },
            { "title": "Earth & Environmental Science", "slug": "earth-environmental-science" },
            { "title": "Technology & Computing", "slug": "technology-computing" }
          ]
      

    return (
        <section className='w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]'>  
            <div> 
                <h1 className='font-bold text-[2rem]'>Scientific Discovery</h1>
                <hr className='border-b-[2px] border-[#222126]'/>
            </div>

            <div>
            <ul className='list-disc pl-[20px] text-[1.3rem]'>
            {scientificDiscoveries_static.map((link, index) => {
                const linkPath = `/LinkComponent-refs/reference_prefetch/scientific-discoveries/${link.slug}`;

                return (
                    <li key={index}>
                        <Link 
                            className={`hover:underline`}
                            href={linkPath}
                            prefetch={true}
                        >
                            {link.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
            </div>
        </section>
    );
 }
