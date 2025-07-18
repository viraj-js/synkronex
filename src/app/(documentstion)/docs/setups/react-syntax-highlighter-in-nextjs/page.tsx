'use client';

import * as React from 'react';
import CodeBlock from '@/components/client/CodeBlock';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

export default function ReactSyntaxHighlighterInNextjsPage() {
  return (
    <Card className="mb-8">
      <CardContent className="py-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-base px-3 py-1">
            <FileText className="w-4 h-4 mr-1 inline" /> TypeScript Declarations
          </Badge>
          <span className="text-muted-foreground text-sm">Custom Module Types</span>
        </div>
        <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
          🟦 Syntax Highlighting in Next.js with <code>react-syntax-highlighter</code>
        </h1>
        <p className="mb-6 text-muted-foreground">
          <strong>react-syntax-highlighter</strong> is a popular React library for rendering code blocks with syntax highlighting, supporting dozens of programming languages and themes. It's perfect for documentation,
          blogs, or any app where you want to display code beautifully and readably.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>Supports Prism and Highlight.js engines for flexible language and theme options.</li>
          <li>Works seamlessly in React and Next.js projects, both client and server side.</li>
          <li>Easy to use with a simple component API.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 mt-6">Installation</h2>
        <CodeBlock code="npm install react-syntax-highlighter prismjs" language="bash" />
        <p className="mb-6 text-muted-foreground">This installs the core syntax highlighter and Prism engine for advanced language support.</p>
        <h2 className="text-xl font-semibold mb-2">
          TypeScript Support: Why a Custom <code>.d.ts</code> File?
        </h2>
        <p className="mb-4 text-muted-foreground">
          Some npm packages, like <code>react-syntax-highlighter</code>, do not ship with their own TypeScript type definitions. When you try to import them in a TypeScript project, you may see errors like:
        </p>
        <CodeBlock
          code={`Could not find a declaration file for module 'react-syntax-highlighter'.
...implicitly has an 'any' type.`}
          language="text"
        />
        <p className="mb-4 text-muted-foreground">
          TypeScript requires type information for every module you import. If that information is missing, you must provide it yourself to avoid type errors and enable type checking.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          What is a <code>.d.ts</code> file?
        </h2>
        <p className="mb-4 text-muted-foreground">
          A <strong>declaration file</strong> (<code>.d.ts</code>) is a special TypeScript file used to define the types for a JavaScript module when they are not available. It tells TypeScript how to treat imports from
          that module so you can use them safely in your code.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          The <code>react-syntax-highlighter.d.ts</code> file
        </h2>
        <p className="mb-4 text-muted-foreground">
          In this project, we created a file at <code>src/types/react-syntax-highlighter.d.ts</code> with the following content:
        </p>
        <CodeBlock
          code={`declare module 'react-syntax-highlighter';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';`}
          language="typescript"
        />
        <h3 className="text-lg font-semibold mb-2">Line-by-line explanation</h3>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>
            <CodeBlock code={`declare module 'react-syntax-highlighter';`} language="typescript" />
            <span>
              This tells TypeScript: "Whenever you see an import from <code>react-syntax-highlighter</code>, treat it as a valid module and allow its usage, even if you don't know its exact types." This prevents type
              errors when importing the main package.
            </span>
          </li>
          <li>
            <CodeBlock code={`declare module 'react-syntax-highlighter/dist/esm/styles/prism';`} language="typescript" />
            <span>This does the same for the Prism theme submodule, which you import for syntax highlighting styles. Without this, TypeScript would also complain about missing types for the theme import.</span>
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          Example: Using <code>react-syntax-highlighter</code> in a Next.js Component
        </h2>
        <p className="mb-4 text-muted-foreground">
          Here’s how you can import and use <code>react-syntax-highlighter</code> in your Next.js project after adding the custom <code>.d.ts</code> file:
        </p>
        <CodeBlock
          code={[
            "import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';",
            "import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';",
            '',
            'export default function MyCodeBlock() {',
            '  return (',
            '    <SyntaxHighlighter language=\"tsx\" style={oneDark}>',
            "      {`const hello = 'world';`}",
            '    </SyntaxHighlighter>',
            '  );',
            '}',
            '// Note: In the code above, the inner backticks and braces are escaped for proper rendering in documentation.',
          ].join('\n')}
          language="tsx"
        />
        <p className="mb-6 text-muted-foreground">
          <strong>What this does:</strong> Imports the Prism-based syntax highlighter and the One Dark theme, then renders a code block with syntax highlighting for TypeScript/TSX code. Thanks to your <code>.d.ts</code>{' '}
          file, TypeScript will not complain about missing types for these imports.
        </p>
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>
            Always place custom <code>.d.ts</code> files in a <code>src/types/</code> or <code>@types/</code> folder for clarity.
          </li>
          <li>
            Only use <code>declare module</code> as a last resort—prefer official or community-provided <code>@types/</code> packages when available.
          </li>
          <li>If you later add official types, remove your custom declaration to avoid conflicts.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="mb-2 text-muted-foreground">
          The <code>react-syntax-highlighter.d.ts</code> file is a simple but essential fix for enabling TypeScript support with <code>react-syntax-highlighter</code> in your Next.js project. It prevents type errors and
          ensures your codebase remains type-safe and maintainable.
        </p>
      </CardContent>
    </Card>
  );
}
