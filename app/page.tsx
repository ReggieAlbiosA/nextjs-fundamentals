

import Link from "next/link";

export default function Home() {

  const specialChar = ["<Link>","<a>"] 

  return (
      <section className="min-h-screen flex flex-col items-center gap-y-[80px] ">
        <div className="flex flex-col  items-center max-w-[1200px] gap-y-[40px] mt-[60px]">
          <h1 className="text-[#222126] font-bold text-[clamp(2rem,5vw,3rem)] text-left">{specialChar[0]} Component API Reference</h1>
          <p className="text-justify text-[clamp(1rem,3vw,2rem)]">-{specialChar[0]} is a React component that extends the HTML {specialChar[1]} element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.</p>
        </div>

        <div className="max-w-[1200px] w-full flex flex-col gap-y-[40px]">
          <div>
            <h1 className="font-bold text-[1.5rem]">Link Props</h1>
            <ul className="list-disc pl-[20px]">
              <li className="underline"><Link href="LinkComponent-refs/reference_replace">replace</Link></li>
              <li className="underline"><Link href="LinkComponent-refs/reference_scroll">scroll</Link></li>
              <li className="underline"><Link href="LinkComponent-refs/reference_prefetch">prefetch</Link></li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-[1.5rem]">More Example use of Cases</h1>
            <ul className="list-disc pl-[20px]">
              <li className="underline"><Link href="LinkComponent-refs/checking-active-links">Checking Active Links</Link></li>
              <li className="underline"><Link href="LinkComponent-refs/if-the-child-is-a-custom-component-that-wraps-an-a-tag">If the child is a custom component that wraps an &lt;a&gt; tag</Link></li>
              <li className="underline"><Link href="LinkComponent-refs/nesting-functional-component">Nesting a functional component</Link></li>
            </ul>
          </div>

        </div>

      </section>

  );
}
