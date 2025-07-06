import * as React from 'react';
import CodeBlock from '@/components/client/CodeBlock';

export const metadata = {
  title: 'TypeScript in Next.js Setup',
};

export default function TsInNextjsPage() {
  return (
    <div className="prose max-w-3xl mx-auto py-8">
      <h1>🟦 Setting up TypeScript in Next.js</h1>
      <ol>
        <li>
          <strong>Create a Next.js project</strong>
          <CodeBlock code="npx create-next-app@latest your-app-name" language="bash" />
        </li>
        <li>
          <strong>Add TypeScript</strong>
          <CodeBlock code="npm install --save-dev typescript @types/react @types/node" language="bash" />
          <ul>
            <li>The first time you run <code>npm run dev</code>, Next.js will auto-generate a <code>tsconfig.json</code> for you.</li>
          </ul>
        </li>
        <li>
          <strong>Recommended <code>tsconfig.json</code> options</strong>
          <ul>
            <li>Next.js sets sensible defaults, but you can customize as needed.</li>
            <li>Keep <code>&quot;jsx&quot;: &quot;preserve&quot;</code> (required by Next.js).</li>
          </ul>
        </li>
        <li>
          <strong>Write <code>.ts</code> and <code>.tsx</code> files</strong>
          <ul>
            <li>Rename pages/components to <code>.tsx</code> for React components, <code>.ts</code> for logic/helpers.</li>
          </ul>
        </li>
        <li>
          <strong>Resources</strong>
          <ul>
            <li><a href="https://nextjs.org/docs/basic-features/typescript" target="_blank" rel="noopener noreferrer">Next.js TypeScript Docs</a></li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
