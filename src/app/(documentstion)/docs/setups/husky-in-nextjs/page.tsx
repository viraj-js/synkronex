'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitCommit, ShieldCheck, FileText, CheckCircle, TerminalSquare } from 'lucide-react';
import CodeBlock from '@/components/client/CodeBlock';



export default function HuskyInNextjsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Intro Card */}
      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1"><ShieldCheck className="w-4 h-4 mr-1 inline" /> Git Hooks</Badge>
            <span className="text-muted-foreground text-sm">Husky + Next.js</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">🐶 Automate Code Quality with Husky</h1>
          <p className="mb-6 text-muted-foreground">
            <strong>Husky</strong> is a tool that helps you manage Git hooks easily in your Next.js project. Git hooks are scripts that run automatically at certain points in your Git workflow, such as before you commit or push code. With Husky, you can automate tasks like code formatting, linting, or running tests before allowing a commit or push, ensuring code quality and consistency across your team.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">What does each setup command do?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong>npm install --save-dev husky</strong>: Installs Husky as a development dependency. This means Husky will only be installed in development environments, not in production builds.</li>
              <li><strong>npx husky install</strong>: Initializes Husky in your project by creating a <code>.husky/</code> directory at the root of your repository. This directory will contain all your Git hook scripts (e.g., <code>pre-commit</code>, <code>pre-push</code>). It also updates your <code>package.json</code> to add a <code>prepare</code> script: <code>"prepare": "husky install"</code>, so Husky is set up automatically after <code>npm install</code>.</li>
              <li><strong>"prepare": "husky install"</strong> (in <code>package.json</code>): Ensures that Husky’s Git hooks are set up after every <code>npm install</code>, which is especially useful for collaborators or CI/CD environments.</li>
              <li><strong>npx husky add .husky/pre-commit "npm run lint"</strong>: Creates a new file <code>.husky/pre-commit</code> with the command <code>npm run lint</code>. Every time you run <code>git commit</code>, Husky will automatically execute <code>npm run lint</code>. If linting fails, the commit is aborted.</li>
              <li><strong>npx husky add .husky/pre-push "npm test"</strong>: (Optional) Creates a <code>.husky/pre-push</code> file that runs <code>npm test</code> before any <code>git push</code>. If the tests fail, the push is aborted.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Why use Husky?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Automates code quality checks (linting, formatting, testing)</li>
              <li>Prevents bad commits/pushes</li>
              <li>Improves team consistency</li>
              <li>Easy to set up and maintain</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Install Husky */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><FileText className="w-4 h-4 mr-1 inline" /> Step 1</Badge>
            <span className="text-muted-foreground text-sm">Install Husky</span>
          </div>
          <CodeBlock code="npm install --save-dev husky" language="bash" />
        </CardContent>
      </Card>

      {/* Step 2: Initialize Husky */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><TerminalSquare className="w-4 h-4 mr-1 inline" /> Step 2</Badge>
            <span className="text-muted-foreground text-sm">Initialize Husky</span>
          </div>
          <CodeBlock code="npx husky install" language="bash" />
          <p className="text-xs text-muted-foreground mt-2">This creates a <code>.husky/</code> directory in your project root.</p>
        </CardContent>
      </Card>

      {/* Step 3: Add Pre-commit Hook */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><GitCommit className="w-4 h-4 mr-1 inline" /> Step 3</Badge>
            <span className="text-muted-foreground text-sm">Add a pre-commit hook</span>
          </div>
          <CodeBlock code={'npx husky add .husky/pre-commit "npm run lint && npm test"'} language="bash" />
          <p className="text-xs text-muted-foreground mt-2">This ensures all code is linted and tested before every commit.</p>
        </CardContent>
      </Card>

      {/* How Husky Hooks Work */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><ShieldCheck className="w-4 h-4 mr-1 inline" /> How it works</Badge>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Every time you run <code>git commit</code>, Husky triggers the <code>pre-commit</code> script.</li>
            <li>If lint or tests fail, the commit is blocked and you see the errors in your terminal.</li>
            <li>If everything passes, your commit succeeds.</li>
            <li>You can add more hooks (e.g., <code>pre-push</code>) as needed.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Best Practices Card */}
      <Card>
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><CheckCircle className="w-4 h-4 mr-1 inline" /> Best Practices</Badge>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Keep your Husky hooks in version control for team consistency.</li>
            <li>Use Husky to enforce not just lint/tests, but also formatting (e.g., <code>prettier</code>).</li>
            <li>Combine with GitHub Actions for both local and remote quality checks.</li>
            <li>Document your hooks in <code>README.md</code> for contributors.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
