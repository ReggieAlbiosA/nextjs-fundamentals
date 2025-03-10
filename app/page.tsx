'use client'
import  { useEffect } from "react";
import Link from "next/link";

export default function Home() {


  useEffect(() => {
    console.log(window.history.length); // Number of entries in session history

  }, []);

  return (
      <section className="min-h-screen flex flex-col items-center gap-y-[80px] ">
        <div className="flex flex-col  items-center max-w-[1200px] gap-y-[40px] mt-[60px]">
          <h1 className="font-bold text-[clamp(2rem,5vw,3rem)] text-left">Next.js Fundamentals and Implementations</h1>
        </div>

        <div className="max-w-[1200px] w-full flex flex-col gap-y-[40px]">
          <div>
            <h1 className="font-bold text-[1.5rem]">Project Structure</h1>
            <ul className="list-disc pl-[20px]">
              <li className="underline"><Link href="/linking-and-navigating">Routing Files</Link></li>
              <li className="underline"><Link href="/linking-and-navigating">Dynamic routes</Link></li>
              <li className="underline"><Link href="/linking-and-navigating">Route Groups and private folders</Link></li>
              <li className="underline"><Link href="/linking-and-navigating">Parallel and Intercepted Routes</Link></li>
              <li className="underline"><Link href="/linking-and-navigating">Routing Files</Link></li>
              <li className="underline"><Link href="/linking-and-navigating">Routing Files</Link></li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-[1.5rem]">Routing</h1>
            <ul className="list-disc pl-[20px]">
              <li className="underline"><Link href="/linking-and-navigating">Linking and Navigating</Link></li>
            </ul>
          </div>
        </div>
      </section>

  );
}
