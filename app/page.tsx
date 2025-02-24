import Link from "next/link";
import { title } from "process";


const SectionWrapper: React.FC<{ children: React.ReactNode, headingText: string, className?: string | '', title: string}> = 
                              ({ children, headingText, className}) => {



  return (
    <section className={`${className} w-screen h-screen`}>
        <h1 className="w-full min-h-[68px] bg-[#3a3940] text-white text-[2.5rem] grid place-items-center">
          {headingText}
        </h1>

        <div>
          {children}
        </div>
    </section>
  )
}

export default function Home() {

  const specialChar = ["<Link>","<a>"] 

  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-y-[80px] ">
        <div className="flex flex-col  items-center max-w-[1200px] gap-y-[40px] mt-[60px]">
          <h1 className="text-[#222126] font-bold text-[clamp(2rem,5vw,3rem)] text-left">{specialChar[0]} Component API Reference</h1>
          <p className="text-justify text-[clamp(1rem,3vw,2rem)]">-{specialChar[0]} is a React component that extends the HTML {specialChar[1]} element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.</p>
        </div>

        <div className="max-w-[1200px] w-full ">
          <h1 className="font-bold text-[1.5rem]">Link Props</h1>
          <ul className="list-disc pl-[20px]">
            <li className="underline"><Link href="LinkComponent-refs/reference_replace">replace</Link></li>
            <li className="underline"><Link href="LinkComponent-refs/reference_scroll">scroll</Link></li>
            <li className="underline"><Link href="LinkComponent-refs/reference_prefetch">prefetch</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-[20px]">
      
     
          <Link href="#section2" className="underline" scroll={true}>section 2</Link>
     
    
          <Link href="#section3" className="underline" scroll={true}>section 3</Link>

        </div>
      </div>
      
     
      </>
  );
}
