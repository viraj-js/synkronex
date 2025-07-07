'use client';
import React from 'react';
import { documentationNavigation } from '@/utils/documentation/content/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

import { useEffect } from 'react';

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const pathName = usePathname();

  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <div
      className={`md:hidden w-full overflow-hidden transition-all duration-300 ${open ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}
      aria-hidden={!open}
    >
      <nav className="w-full bg-background shadow-md flex flex-col gap-2 px-4">
        {documentationNavigation.map((item) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
