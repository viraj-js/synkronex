import * as React from 'react';
import CodeBlock from '@/components/client/CodeBlock';

export const metadata = {
  title: 'TypeScript in Next.js Setup',
};

export default function TsInNextjsPage() {
  return (
    <div className="prose max-w-3xl mx-auto py-8">
      <h1>🟦 Setting up TypeScript in Next.js</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is TypeScript and why use it?</h2>
        <p className="text-muted-foreground mb-2">
          <strong>TypeScript</strong> is a strongly typed programming language that builds on
          JavaScript, adding static type definitions. Using TypeScript in Next.js helps catch errors
          early, improves code quality, and provides better autocompletion and refactoring support
          in your editor.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>Helps catch bugs at compile time, not just runtime</li>
          <li>Improves code readability and maintainability</li>
          <li>Enables safer refactoring and better developer experience</li>
          <li>Works seamlessly with Next.js for both frontend and backend code</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What does each setup step do?</h2>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Create a Next.js project:</strong>{' '}
            <code>npx create-next-app@latest your-app-name</code> scaffolds a new Next.js app.
          </li>
          <li>
            <strong>Add TypeScript and types:</strong>{' '}
            <code>npm install --save-dev typescript @types/react @types/node</code> installs the
            TypeScript compiler and type definitions for React and Node.js.
          </li>
          <li>
            <strong>
              Auto-generate <code>tsconfig.json</code>:
            </strong>{' '}
            The first time you run <code>npm run dev</code>, Next.js will detect TypeScript and
            create a <code>tsconfig.json</code> with sensible defaults.
          </li>
          <li>
            <strong>
              Recommended <code>tsconfig.json</code> options:
            </strong>{' '}
            Next.js sets up required options, but you can customize as needed. Keep{' '}
            <code>&quot;jsx&quot;: &quot;preserve&quot;</code> for compatibility.
          </li>
          <li>
            <strong>
              Write <code>.ts</code> and <code>.tsx</code> files:
            </strong>{' '}
            Use <code>.tsx</code> for React components, <code>.ts</code> for logic/helpers. Rename
            files as needed.
          </li>
        </ul>
      </div>
      <ol>
        <li>
          <strong>Create a Next.js project</strong>
          <CodeBlock code="npx create-next-app@latest your-app-name" language="bash" />
        </li>
        <li>
          <strong>Add TypeScript</strong>
          <CodeBlock
            code="npm install --save-dev typescript @types/react @types/node"
            language="bash"
          />
          <ul>
            <li>
              The first time you run <code>npm run dev</code>, Next.js will auto-generate a{' '}
              <code>tsconfig.json</code> for you.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Recommended <code>tsconfig.json</code> options
          </strong>
          <ul>
            <li>Next.js sets sensible defaults, but you can customize as needed.</li>
            <li>
              Keep <code>&quot;jsx&quot;: &quot;preserve&quot;</code> (required by Next.js).
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Write <code>.ts</code> and <code>.tsx</code> files
          </strong>
          <ul>
            <li>
              Rename pages/components to <code>.tsx</code> for React components, <code>.ts</code>{' '}
              for logic/helpers.
            </li>
          </ul>
        </li>
        <li>
          <strong>Resources</strong>
          <ul>
            <li>
              <a
                href="https://nextjs.org/docs/basic-features/typescript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js TypeScript Docs
              </a>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
