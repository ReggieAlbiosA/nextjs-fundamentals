'use client'

import Link from 'next/link'
import React from 'react'
 
// Define the props type for MyButton
interface MyButtonProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href?: string
  className?: string
}
 
// Use React.ForwardRefRenderFunction to properly type the forwarded ref
const MyButton: React.ForwardRefRenderFunction<HTMLAnchorElement, MyButtonProps> = ({ onClick, href, className}, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={className}>
      Click Me
    </a>
  )
}
 
// Use React.forwardRef to wrap the component
const ForwardedMyButton = React.forwardRef(MyButton)

export default function Page(){
    return (
        <section className="w-full max-w-[850px] mx-auto pt-[50px] flex flex-col gap-y-[40px]">
             <div>
                <h1 className="font-bold text-[2rem]">Nesting a functional component</h1>      
                <hr className="border-b-[2px] border-[#222126]" />
            </div>

            <Link href="/LinkComponent-refs/nesting-functional-component/demo" passHref legacyBehavior>
                <ForwardedMyButton className='!bg-[red]'/>
            </Link>
        </section>
    )
}