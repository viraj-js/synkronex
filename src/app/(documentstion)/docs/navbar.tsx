// Updated navbar component
'use client';

import { documentationNavigation } from '@/utils/documentation/content/navigation';
// Removed unused import to fix lint error
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur  ">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 py-2">
        {/* Logo/Title */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="hidden sm:inline">Synkronex Docs</span>
          <span className="sm:hidden">Synkronex</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 ml-4">
          {documentationNavigation.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger for mobile */}
          <button
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/70"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
