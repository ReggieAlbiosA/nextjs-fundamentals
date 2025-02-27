'use client'; // Required for client components in Next.js App Router

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/LinkComponent-refs/checking-active-links' },
  { name: 'About', href: '/LinkComponent-refs/checking-active-links/about' },
  { name: 'Services', href: '/LinkComponent-refs/checking-active-links/services' },
  { name: 'Blog', href: '/LinkComponent-refs/checking-active-links/blog' },
  { name: 'Contact', href: '/LinkComponent-refs/checking-active-links/contact' }
];



export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
    return (
        <>
        <style>
            {`
            body{
                padding: 0px !important;
            }
            `}
         </style>

        <section>
            <nav className="p-4 bg-white shadow rounded-lg">
            <div className="flex flex-wrap gap-x-6 gap-y-2 w-max mx-auto">
                {navLinks.map((link) => {
                // Check if the current route matches the link
                const isActive = pathname === link.href;
                
                // For nested routes, you can use: pathname.startsWith(link.href) && link.href !== '/'
                // For exact match only, use: pathname === link.href

                return (
                    <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                        isActive 
                        ? 'bg-blue-500 text-white font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    replace
                    prefetch={true}
                    >
                    {link.name}
                    </Link>
                );
                })}
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md w-max mx-auto">
                <h2 className="font-medium mb-2">Current Path:</h2>
                <code className="bg-gray-800 text-white p-2 rounded-md block">{pathname}</code>
            </div>
            </nav>
        <div className='grid place-items-center text-[4rem] font-bold mt-[200px]'>{children}</div>
    </section>
    </>
    );
}