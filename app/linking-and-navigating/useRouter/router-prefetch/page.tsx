"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [isPrefetched, setIsPrefetched] = useState(false);

    const handlePrefetch = () => {
        router.prefetch("/linking-and-navigating/Link/prefetch/scientific-discoveries/physics-space");
        setIsPrefetched(true);
    };

    return (
        <section className="w-full max-w-[850px] min-h-screen mx-auto flex flex-col items-center justify-center gap-y-10 text-center px-4">
            <h1 className="font-bold text-[clamp(1rem,3vw,2rem)] leading-snug">
                Try to navigate to the **Slow Page** below to simulate slow response time.  
                Now, press the **Prefetch** button and wait a few seconds.  
                Then, go to the Slow Page again, and you&apos;ll notice it loads much faster than before! 🚀
            </h1>
            
            <button 
                className="bg-[#222126] text-white px-6 py-3 rounded-lg hover:bg-[#333] transition"
                onClick={handlePrefetch}
            >
                Prefetch
            </button>

            {isPrefetched && (
                <p className="text-green-400 font-medium">
                    ✅ Prefetch complete! Now try navigating again.
                </p>
            )}

            <Link href="/linking-and-navigating/Link/prefetch/scientific-discoveries/physics-space" className="underline text-[#222126] text-[clamp(1rem,3vw,2rem)]">Dynamic Page</Link>
        </section>
    );
}
