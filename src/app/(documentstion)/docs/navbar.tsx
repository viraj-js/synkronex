// Updated navbar component
"use client"

import { documentationNavigation } from '@/utils/documentation/content/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ThemeToggle } from '@/components/theme/theme-toggle'

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName, "pathName");

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                {documentationNavigation.map((item) => {
                    const isActive = pathName === item.href;
                    return (
                        <React.Fragment key={item.href}>
                            <Link
                                href={item.href}
                                className={`px-4 py-2 mx-1 text-sm font-medium rounded-md transition-colors ${isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </React.Fragment>
                    )
                })}
            </div>

            <div className='flex items-center'>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar