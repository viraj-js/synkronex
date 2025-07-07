'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';
import CodeBlock from '@/components/client/CodeBlock';

export default function PrettierInNextjsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Intro Card */}
      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1">
              <FileText className="w-4 h-4 mr-1 inline" /> Formatter
            </Badge>
            <span className="text-muted-foreground text-sm">Prettier + Next.js</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            ✨ Format Your Code with Prettier
          </h1>
          <p className="mb-6 text-muted-foreground">
            <strong>Prettier</strong> is an opinionated code formatter that enforces a consistent
            style by parsing your code and re-printing it with its own rules. Integrating Prettier
            in your Next.js project helps maintain code quality and readability across your team.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Setup Steps</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Install Prettier:</strong>{' '}
                <CodeBlock language="bash" code={`npm install --save-dev prettier`} /> Installs
                Prettier as a development dependency.
              </li>
              <li>
                <strong>
                  Create a <code>.prettierrc</code> file
                </strong>
                : Add Prettier configuration at the root of your project. Example:
                <CodeBlock
                  language="json"
                  code={`{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}`}
                />
                <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground text-sm">
                  <li>
                    <code>"semi": true</code> — Always add a semicolon at the end of every
                    statement.
                  </li>
                  <li>
                    <code>"singleQuote": true</code> — Use single quotes instead of double quotes
                    wherever possible.
                  </li>
                  <li>
                    <code>"tabWidth": 2</code> — Indent lines with 2 spaces per tab.
                  </li>
                  <li>
                    <code>"trailingComma": "es5"</code> — Add trailing commas wherever valid in ES5
                    (objects, arrays, etc.).
                  </li>
                  <li>
                    <code>"printWidth": 100</code> — Wrap lines at 100 characters for better
                    readability.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Add format scripts to <code>package.json</code>
                </strong>
                :
                <CodeBlock
                  language="json"
                  code={`{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}`}
                />
              </li>
              <li>
                <strong>Run formatting</strong>:{' '}
                <CodeBlock language="bash" code={`npm run format`} />
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Why use Prettier?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Automatically formats code for consistency</li>
              <li>Reduces code review overhead</li>
              <li>Supports many languages and integrates with most editors</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Why enforce Prettier in both Husky and GitHub Actions?
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Local (Husky pre-commit):</strong> Ensures that every developer formats
                their code before committing, catching issues early and preventing unformatted code
                from entering the repository.
              </li>
              <li>
                <strong>CI (GitHub Actions):</strong> Acts as a safety net to enforce formatting for
                all code pushed to the repository, even if a contributor does not have Husky set up
                locally or bypasses hooks.
              </li>
              <li>
                This dual enforcement guarantees code quality and consistency, regardless of
                individual developer setups or accidental bypasses.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
