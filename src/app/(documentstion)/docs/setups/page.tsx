'use client';

import * as React from 'react';
import Link from 'next/link';





export default function SetupsPage() {


  return (
    <div className="flex min-h-screen">
      {/* Main content */}
      <main className="flex-1 p-6 max-w-3xl mx-auto">
        <h1 className="mb-4">🛠️ Project Setup Guides</h1>
        <p>Welcome! Here you&apos;ll find all the setup guides for this project. Use these guides to quickly bootstrap new projects or onboard new team members.</p>
        <hr className="my-6" />
        <h2>⚡ Quick Start</h2>
        <p>See the <Link href="../../../README.setup.md">Setup Guide</Link> for step-by-step instructions on installing dependencies, running the dev server, and configuring Jest.</p>
        <h3>🟦 TypeScript in Next.js</h3>
        <p>Learn how to add and configure TypeScript for type-safe, scalable Next.js apps. <Link href="/docs/setups/ts-in-nextjs">Read more →</Link></p>
        <h3>🧪 Jest in Next.js</h3>
        <p>Step-by-step guide for setting up Jest and React Testing Library for robust testing. <Link href="/docs/setups/jest-in-nextjs">Read more →</Link></p>
        <h3>🎨 shadcn/ui in Next.js</h3>
        <p>How to install and use shadcn/ui for beautiful, customizable UI components. <Link href="/docs/setups/shadcn-in-nextjs">Read more →</Link></p>
        <h3>🐶 Husky in Next.js</h3>
        <p>Set up Husky Git hooks to enforce linting and testing before every commit. <Link href="/docs/setups/husky-in-nextjs">Read more →</Link></p>
        <h3>🤖 GitHub Actions in Next.js</h3>
        <p>Automate CI/CD for your Next.js app using GitHub Actions. <Link href="/docs/setups/github-actions-in-nextjs">Read more →</Link></p>
        <h2>📝 Additional Notes</h2>
        <ul>
          <li>All setup guides are Markdown-based and can be extended for new tools or frameworks.</li>
          <li>For any new setup (e.g., CI/CD, linting, deployment), add a new guide in this folder and link it here.</li>
        </ul>
      </main>
    </div>
  );
}

