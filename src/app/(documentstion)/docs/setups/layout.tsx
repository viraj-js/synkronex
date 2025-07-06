'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import * as React from 'react';

export default function SetupsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const links = [
    { name: 'Setup Guide', href: '/docs/setups', icon: '🛠️' },
    { name: 'TypeScript in Next.js', href: '/docs/setups/ts-in-nextjs', icon: '🟦' },
    { name: 'Jest in Next.js', href: '/docs/setups/jest-in-nextjs', icon: '🧪' },
    { name: 'shadcn/ui in Next.js', href: '/docs/setups/shadcn-in-nextjs', icon: '🎨' },
    { name: 'Husky in Next.js', href: '/docs/setups/husky-in-nextjs', icon: '🎗️' },
    { name: 'GitHub Actions in Next.js', href: '/docs/setups/github-actions-in-nextjs', icon: '🎄' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r bg-background/90 p-4">
        <Link href="/docs" className="mb-6 flex items-center gap-2 text-primary hover:underline font-semibold text-base">
          ← Back to Docs
        </Link>
        <h2 className="font-bold text-lg mb-4">Setup Topics</h2>
        <nav className="flex flex-col gap-2">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded transition-colors font-medium text-sm ${
                pathname === link.href
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span>{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-background border rounded p-2 shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <aside className="fixed z-50 top-0 left-0 w-64 h-full bg-background border-r p-4 flex flex-col">
          <button
            className="self-end mb-4 text-lg"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
          <h2 className="font-bold text-lg mb-4">Setup Topics</h2>
          <nav className="flex flex-col gap-2">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded transition-colors font-medium text-sm ${
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
      )}
      {/* Main content */}
      <main className="flex-1 p-6 max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  );
}
