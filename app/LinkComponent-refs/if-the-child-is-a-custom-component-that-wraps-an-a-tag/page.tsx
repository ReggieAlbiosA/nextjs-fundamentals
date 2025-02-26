'use client';

import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function RedLink() {
    return <a className="text-[red] underline">red link</a>;
}
export function BlueLink() {
    return <a className="text-[blue] underline">blue link</a>;
}
export function GreenLink() {
    return <a className="text-[green] underline">green link</a>;
}
export function YellowLink() {
    return <a className="text-[yellow] underline">yellow link</a>;
}
export function PurpleLink() {
    return <a className="text-[purple] underline">purple link</a>;
}
export function OrangeLink() {
    return <a className="text-[orange] underline">orange link</a>;
}

export default function NavLink() {
    const linkComponents = [
        { component: <BlueLink />, color: 'blue' },
        { component: <GreenLink />, color: 'green' },
        { component: <YellowLink />, color: 'yellow' },
        { component: <PurpleLink />, color: 'purple' },
        { component: <OrangeLink />, color: 'orange' }
    ];

    const code = `
    <ul className='list-disc pl-[20px]'>
      {linkComponents.map(({ component, color }, index) => (
        <li key={index}>
          <Link 
            href={\`/LinkComponent-refs/if-the-child-is-a-custom-component-that-wraps-an-a-tag#\${color}\`}
            replace 
            passHref 
            legacyBehavior
            scroll={false}
          >
            {component}
          </Link>
        </li>
      ))}
    </ul>
    `;

    return (
        <section className="w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]">
            <div>
                <h1 className="font-bold text-[2rem]">
                    Custom Component that wraps an {`<a>`} tag from next.js Link Component
                </h1>
                <hr className="border-b-[2px] border-[#222126]" />
            </div>

            <div>
                <p>
                    <strong>Example:</strong>
                </p>
                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {code}
                </SyntaxHighlighter>
            </div>

            <div className="flex flex-col gap-y-[10px]">
                <p>
                    <strong>Output:</strong>
                </p>
                <ul className="list-disc pl-[20px]">
                    {linkComponents.map(({ component, color }, index) => (
                        <li key={index}>
                            <Link
                                href={`/LinkComponent-refs/if-the-child-is-a-custom-component-that-wraps-an-a-tag#${color}`}
                                replace
                                passHref
                                legacyBehavior
                                scroll={false}
                            >
                                {component}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <p>
                <strong>Note:</strong> If the child of Link is a custom component that wraps an
                {`<a>`} tag, you must add <code>passHref</code> to Link. This is necessary if you’re
                using libraries like styled-components. Without this, the {`<a>`}; tag will not have
                the href attribute, which hurts your site's accessibility and might affect SEO.
            </p>
        </section>
    );
}
