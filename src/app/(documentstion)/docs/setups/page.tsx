'use client';

import * as React from 'react';
import Link from 'next/link';

export default function SetupsPage() {
  return (
    <div className="flex min-h-screen bg-background w-full">
      <main className="flex-1 p-6 w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">🛠️ Project Setup Guides</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Welcome! Here you'll find all the setup guides for this project. Use these guides to quickly bootstrap new projects or onboard new team members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* TypeScript */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🟦</span>
              <span className="font-semibold">TypeScript in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Add and configure TypeScript for type-safe, scalable Next.js apps.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/ts-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* Jest */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🧪</span>
              <span className="font-semibold">Jest in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Set up Jest and React Testing Library for robust testing.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/jest-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* Prettier */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">✨</span>
              <span className="font-semibold">Prettier in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Automate code formatting for a consistent style across your Next.js project.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/prettier-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* ESLint */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🧹</span>
              <span className="font-semibold">ESLint in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Catch errors and enforce code quality standards in your Next.js project.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/eslint-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* shadcn/ui */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🎨</span>
              <span className="font-semibold">shadcn/ui in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Install and use shadcn/ui for beautiful, customizable UI components.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/shadcn-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* Husky */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🐶</span>
              <span className="font-semibold">Husky in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Set up Husky Git hooks to enforce linting and testing before every commit.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/husky-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* GitHub Actions */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold">GitHub Actions in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Automate CI/CD for your Next.js app using GitHub Actions.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/github-actions-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* Babel */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🟦</span>
              <span className="font-semibold">Babel in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Set up Babel for transpiling modern JavaScript to widely supported JavaScript.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/babel-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* Tailwind CSS */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🌈</span>
              <span className="font-semibold">Tailwind CSS in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Set up Tailwind CSS for utility-first, responsive, and fast styling in your Next.js project.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/tailwindcss-in-nextjs">
              Read more →
            </Link>
          </div>

          {/* PWA */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">PWA in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Enable Progressive Web App features (offline, install, caching) in your Next.js project using next-pwa and a manifest file.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/pwa-in-nextjs">
              Read more →
            </Link>
          </div>
          {/* react-syntax-highlighter */}
          <div className="rounded-xl border bg-card shadow p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🟦</span>
              <span className="font-semibold">react-syntax-highlighter in Next.js</span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">Add and configure react-syntax-highlighter for syntax highlighting in your Next.js project.</p>
            <Link className="text-primary font-medium hover:underline mt-2" href="/docs/setups/react-syntax-highlighter-in-nextjs">
              Read more →
            </Link>
          </div>
        </div>
        <div className="bg-accent/40 rounded-xl p-5 border text-sm">
          <h2 className="font-semibold mb-2 flex items-center gap-2">📝 Additional Notes</h2>
          <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
            <li>All setup guides are Markdown-based and can be extended for new tools or frameworks.</li>
            <li>For any new setup (e.g., CI/CD, linting, deployment), add a new guide in this folder and link it here.</li>
            <li>
              See the{' '}
              <Link className="underline" href="../../../README.setup.md">
                Setup Guide
              </Link>{' '}
              for step-by-step instructions on installing dependencies, running the dev server, and configuring Jest.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
