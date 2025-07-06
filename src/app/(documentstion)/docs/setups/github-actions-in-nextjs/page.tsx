"use client";

import * as React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Workflow, Server, FileText, CheckCircle, TerminalSquare } from 'lucide-react';
import CodeBlock from '@/components/client/CodeBlock';



export default function GithubActionsInNextjsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Intro Card */}
      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1"><Workflow className="w-4 h-4 mr-1 inline" /> CI/CD</Badge>
            <span className="text-muted-foreground text-sm">GitHub Actions + Next.js</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">🤖 Automate Next.js with GitHub Actions</h1>
          <p className="mb-6 text-muted-foreground">
            <strong>GitHub Actions</strong> is a powerful automation platform built into GitHub. It lets you run scripts on every push or pull request—perfect for testing, linting, building, and deploying your Next.js app automatically.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">What does each workflow step do?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong>Checkout repository</strong>: Uses <code>actions/checkout@v4</code> to clone your code into the CI environment.</li>
              <li><strong>Set up Node.js</strong>: Uses <code>actions/setup-node@v4</code> to specify the Node.js version (e.g., 20) for your workflow.</li>
              <li><strong>Install dependencies</strong>: Runs <code>npm ci</code> for a clean, reproducible install using your <code>package-lock.json</code>.</li>
              <li><strong>Lint</strong>: Runs <code>npm run lint</code> to check code style and catch errors. <code>|| true</code> allows the workflow to continue even if lint fails (optional).</li>
              <li><strong>Build</strong>: Runs <code>npm run build</code> to build your Next.js app, ensuring it compiles successfully.</li>
              <li><strong>Run tests</strong>: Runs <code>npm test -- --coverage</code> to execute your test suite and collect code coverage.</li>
              <li><strong>Upload coverage report</strong>: Uses <code>actions/upload-artifact@v4</code> to save the coverage report as an artifact you can download from the workflow run.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Why use GitHub Actions for Next.js?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Automates quality checks (lint, test, build) on every push or PR</li>
              <li>Prevents broken code from being merged</li>
              <li>Enables continuous deployment and integration</li>
              <li>Easy to customize for your team’s needs</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Workflow File */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><FileText className="w-4 h-4 mr-1 inline" /> Step 1</Badge>
            <span className="text-muted-foreground text-sm">Create workflow file</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Add <code>ci.yml</code> to <code>.github/workflows/</code></h2>
          <CodeBlock code={`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint || true
      - name: Build
        run: npm run build
      - name: Run tests
        run: npm test -- --coverage
      - name: Upload coverage report
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage
`} language="yaml" />
        </CardContent>
      </Card>

      {/* Step 2: Workflow Breakdown */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><TerminalSquare className="w-4 h-4 mr-1 inline" /> Step 2</Badge>
            <span className="text-muted-foreground text-sm">Understand each workflow step</span>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Checkout repository</strong>: Uses <code>actions/checkout</code> to fetch your code.</li>
            <li><strong>Set up Node.js</strong>: Installs Node.js 20 for a consistent environment.</li>
            <li><strong>Install dependencies</strong>: Runs <code>npm ci</code> for a clean, fast install.</li>
            <li><strong>Lint</strong>: Runs <code>npm run lint</code> (won&apos;t fail the build if lint fails, but you can remove <code>&quot;|| true&quot;</code> to enforce it).</li>
            <li><strong>Build</strong>: Compiles your Next.js app in production mode.</li>
            <li><strong>Run tests</strong>: Executes all your Jest tests and collects coverage.</li>
            <li><strong>Upload coverage report</strong>: Saves the coverage results as a downloadable artifact.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Best Practices & Why Use Actions */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><CheckCircle className="w-4 h-4 mr-1 inline" /> Best Practices</Badge>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Keep your workflow file in version control for easy collaboration.</li>
            <li>Extend with more jobs (e.g., deploy, preview, e2e tests) as your project grows.</li>
            <li>Review Actions logs for every PR to catch issues early.</li>
            <li>Use <code>actions/cache</code> for faster builds if needed.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Why Use GitHub Actions */}
      <Card>
        <CardContent className="py-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="px-2 py-1" variant="outline"><Server className="w-4 h-4 mr-1 inline text-blue-600" /> Why GitHub Actions?</Badge>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Automates quality checks on every push and PR.</li>
            <li>Ensures your Next.js app always builds and passes tests before merging.</li>
            <li>Easy to extend for deployment, preview, or other workflows.</li>
            <li>Free for public repos and generous for private repos.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
