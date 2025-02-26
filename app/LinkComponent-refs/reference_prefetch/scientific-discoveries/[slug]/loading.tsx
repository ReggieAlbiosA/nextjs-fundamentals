'use client';

import { useParams } from 'next/navigation';

function convertToTitleCase(str: string) {
  return str
    .replace("-", " & ").replace(/-/g, " ")// Replace hyphens with spaces
    .replace(/\b\w/g, (char: string) => char.toUpperCase()); // Capitalize each word
}

export default function Loading() {
  const params = useParams();
  const slug = params?.slug as string | undefined; // Ensure slug is a string or undefined

  return (
    <section className="w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]">
      <div>
        <h1 className="font-bold text-[2rem]">
          {slug ? convertToTitleCase(slug) : 'Loading'}...
        </h1>
        <hr className="border-b-[2px] border-[#222126]" />
      </div>
    </section>
  );
}
