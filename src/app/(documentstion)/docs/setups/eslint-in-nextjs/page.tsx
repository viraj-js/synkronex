"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import CodeBlock from "@/components/client/CodeBlock";

export default function EslintInNextjsPage() {
  return (
    <Card className="mb-8">
      <CardContent className="py-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-base px-3 py-1">
            <FileText className="w-4 h-4 mr-1 inline" /> Linter
          </Badge>
          <span className="text-muted-foreground text-sm">ESLint + Next.js</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          🧹 Enforce Code Quality with ESLint
        </h1>
        <p className="mb-6 text-muted-foreground">
          <strong>ESLint</strong> is a powerful tool for identifying and fixing problems in your JavaScript/TypeScript code. It helps enforce coding standards, catch bugs early, and improve overall code quality and maintainability in your Next.js project.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Setup Steps (Flat Config for ESLint v9+)</h2>
          <ul className="list-decimal ml-6 space-y-4 text-base">
            <li>
              <strong>Install ESLint and dependencies:</strong>
              <CodeBlock language="bash" code={`npm install --save-dev eslint @eslint/eslintrc eslint-config-next`} />
              Installs ESLint, the compatibility helper for flat config, and Next.js's recommended config.
            </li>
            <li>
              <strong>Create <code>eslint.config.mjs</code> at the project root:</strong>
              <CodeBlock language="javascript" code={`import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
`} />
              This is the new recommended way to configure ESLint in v9+ projects.
            </li>
            <li>
              <strong>Add a lint script to <code>package.json</code>:</strong>
              <CodeBlock language="json" code={`{
  "scripts": {
    "lint": "next lint"
  }
}`} />
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground text-sm">
                <li><code>"lint": "next lint"</code> — Runs ESLint with Next.js integration, checking all files for linting errors.</li>
              </ul>
            </li>
            <li>
              <strong>Run linting:</strong>
              <CodeBlock language="bash" code={`npm run lint`} />
              Runs ESLint and outputs any code style or error issues.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Line-by-Line Explanation of <code>eslint.config.mjs</code></h2>
          <CodeBlock language="javascript" code={`import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
`} />
          <div className="space-y-4 text-muted-foreground text-base">
            <div>
              Node.js helper to get the directory name of the current module file:
              <CodeBlock language="javascript" code={`import { dirname } from 'path';`} />
            </div>
            <div>
              Converts the module URL to a file path (needed for ESM modules):
              <CodeBlock language="javascript" code={`import { fileURLToPath } from 'url';`} />
            </div>
            <div>
              Import the compatibility helper that allows using old-style configs with the new flat config:
              <CodeBlock language="javascript" code={`import { FlatCompat } from '@eslint/eslintrc';`} />
            </div>
            <div>
              Gets the absolute path of the current config file:
              <CodeBlock language="javascript" code={`const __filename = fileURLToPath(import.meta.url);`} />
            </div>
            <div>
              Gets the directory name of the config file:
              <CodeBlock language="javascript" code={`const __dirname = dirname(__filename);`} />
            </div>
            <div>
              Creates a FlatCompat instance, telling it where to resolve configs from:
              <CodeBlock language="javascript" code={`const compat = new FlatCompat({ baseDirectory: __dirname });`} />
            </div>
            <div>
              Loads Next.js and TypeScript recommended configs using the compatibility helper:
              <CodeBlock language="javascript" code={`...compat.extends('next/core-web-vitals', 'next/typescript')`} />
            </div>
            <div>
              Example of overriding a specific lint rule (here, disabling a React warning about unescaped entities):
              <CodeBlock language="javascript" code={`rules: { 'react/no-unescaped-entities': 'off' }`} />
            </div>
            <div>
              Exports the config for ESLint to use:
              <CodeBlock language="javascript" code={`export default eslintConfig;`} />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Why Use Flat Config?</h2>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-base">
            <li><strong>Required for ESLint v9+:</strong> The new flat config format is now the recommended way to configure ESLint.</li>
            <li><strong>More flexible and powerful:</strong> Supports JavaScript/ESM, dynamic config, and modern workflows.</li>
            <li><strong>FlatCompat bridges the gap:</strong> Lets you use existing configs/plugins while the ecosystem migrates from .eslintrc to flat config.</li>
            <li><strong>Still supports all Next.js rules:</strong> You get all the benefits of Next.js's recommended linting, just in a modern format.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">ESLint vs. Code Formatters (Prettier)</h2>
          <table className="w-full text-left border mt-3 mb-5">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3">Feature</th>
                <th className="py-2 px-3">ESLint</th>
                <th className="py-2 px-3">Prettier</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">Purpose</td>
                <td className="py-2 px-3">Finds code errors, enforces best practices, can auto-fix some issues</td>
                <td className="py-2 px-3">Formats code for consistent style (spaces, quotes, etc.)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Checks for bugs</td>
                <td className="py-2 px-3">Yes</td>
                <td className="py-2 px-3">No</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Formats code</td>
                <td className="py-2 px-3">Some (with plugins/rules)</td>
                <td className="py-2 px-3">Yes (main purpose)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Integrates with Next.js</td>
                <td className="py-2 px-3">Yes (via eslint-config-next)</td>
                <td className="py-2 px-3">Yes (via scripts)</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Recommended Usage</td>
                <td className="py-2 px-3">Use for code quality, best practices, and error catching</td>
                <td className="py-2 px-3">Use for code style and formatting</td>
              </tr>
            </tbody>
          </table>
          <p className="text-muted-foreground text-base">
            <strong>Use both ESLint and Prettier together</strong> for best results: ESLint for code quality and correctness, Prettier for consistent code formatting. You can configure ESLint to work alongside Prettier using <code>eslint-config-prettier</code> to avoid rule conflicts.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
          <ul className="list-disc ml-6 space-y-1 text-muted-foreground text-base">
            <li>Run <code>npm run lint</code> before pushing code to catch errors early.</li>
            <li>Integrate ESLint in your CI pipeline (e.g., GitHub Actions) for automated code checks.</li>
            <li>Use <code>eslint-config-prettier</code> if you want to combine Prettier and ESLint without conflicts.</li>
            <li>Keep your ESLint and Prettier configs up to date with project needs.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
