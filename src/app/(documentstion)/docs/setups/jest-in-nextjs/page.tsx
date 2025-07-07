'use client';

import * as React from 'react';
import CodeBlock from '@/components/client/CodeBlock';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, FileCode2, CheckCircle, BarChart, Github } from 'lucide-react';

export default function JestInNextjsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1">
              <FlaskConical className="w-4 h-4 mr-1 inline" /> Testing
            </Badge>
            <span className="text-muted-foreground text-sm">Jest + Testing Library</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            🧪 Setting up Jest in Next.js
          </h1>
          <p className="mb-6 text-muted-foreground">
            <strong>Jest</strong> is a popular JavaScript testing framework, and{' '}
            <strong>Testing Library</strong> provides utilities for testing React components in a
            way that focuses on user interactions. Together, they allow you to write robust unit and
            integration tests for your Next.js app, ensuring your code works as expected and remains
            reliable as your project grows.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              What does each install/config command do?
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>
                  npm install --save-dev jest @testing-library/react @testing-library/jest-dom
                  babel-jest @types/jest jest-environment-jsdom identity-obj-proxy
                </strong>
                : Installs all necessary packages for testing in a TypeScript-based Next.js project:
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <strong>jest</strong>: The core testing framework for running and structuring
                    your tests.
                  </li>
                  <li>
                    <strong>@testing-library/react</strong>: Provides utilities for rendering and
                    interacting with React components in tests.
                  </li>
                  <li>
                    <strong>@testing-library/jest-dom</strong>: Adds custom matchers for asserting
                    on DOM nodes, making your tests more expressive.
                  </li>
                  <li>
                    <strong>babel-jest</strong>: Allows Jest to use your Babel configuration for
                    transforming files, including TypeScript if Babel is set up for it.
                  </li>
                  <li>
                    <strong>@types/jest</strong>: TypeScript type definitions for Jest, improving
                    autocompletion and type safety in tests.
                  </li>
                  <li>
                    <strong>jest-environment-jsdom</strong>: Simulates a browser environment for
                    your tests using JSDOM, enabling DOM APIs.
                  </li>
                  <li>
                    <strong>identity-obj-proxy</strong>: Mocks CSS module imports so you can test
                    components using CSS modules without errors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>jest.config.js</strong>: The configuration file for Jest. Sets up the test
                environment, configures module resolution (like aliasing <code>@/</code> to{' '}
                <code>src/</code>), ignores certain paths, and tells Jest how to handle TypeScript
                and CSS modules.
              </li>
              <li>
                <strong>jest.setup.js</strong>: A setup file that runs before your tests. Typically
                used to import <code>@testing-library/jest-dom</code> so you get the custom matchers
                in every test file.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Why use Jest + Testing Library?</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Automates testing to catch bugs early and ensure code correctness</li>
              <li>Enables user-focused testing for React components</li>
              <li>Supports TypeScript out of the box</li>
              <li>Easy to run tests locally or in CI/CD pipelines</li>
            </ul>
          </div>
          <ol className="space-y-6 list-decimal ml-5">
            <li>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600" />{' '}
                <strong>Install dependencies</strong>
              </div>
              <CodeBlock
                code="npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest @types/jest jest-environment-jsdom identity-obj-proxy"
                language="bash"
              />
              <ul className="mt-2 mb-4 text-sm text-muted-foreground">
                <li>
                  <strong>jest</strong>: The core JavaScript testing framework.
                </li>
                <li>
                  <strong>@testing-library/react</strong>: Utilities for testing React components in
                  a way that simulates user interaction.
                </li>
                <li>
                  <strong>@testing-library/jest-dom</strong>: Custom Jest matchers for asserting on
                  DOM nodes.
                </li>
                <li>
                  <strong>ts-jest</strong>: TypeScript preprocessor for Jest, allowing you to test
                  TypeScript files.
                </li>
                <li>
                  <strong>@types/jest</strong>: TypeScript type definitions for Jest.
                </li>
                <li>
                  <strong>jest-environment-jsdom</strong>: JSDOM-based environment for simulating
                  the browser in tests (needed for React).
                </li>
                <li>
                  <strong>identity-obj-proxy</strong>: Mocks CSS module imports for Jest, returning
                  a proxy object.
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 mb-2">
                <FileCode2 className="w-4 h-4 text-blue-600" />{' '}
                <strong>
                  Add Jest config (<code>jest.config.js</code>)
                </strong>
              </div>
              <CodeBlock
                code={`module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};`}
                language="js"
              />
            </li>
            <li>
              <div className="flex items-center gap-2 mb-2">
                <FileCode2 className="w-4 h-4 text-blue-600" />{' '}
                <strong>
                  Add Jest setup file (<code>jest.setup.js</code>)
                </strong>
              </div>
              <CodeBlock code={`require('@testing-library/jest-dom');`} language="js" />
            </li>
            <li>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> <strong>Usage</strong>
              </div>
              <ul className="text-sm text-muted-foreground">
                <li>
                  Put test files in <code>__tests__</code> folders near your code.
                </li>
                <li>
                  Name them <code>[name].test.ts</code> or <code>[name].test.tsx</code>.
                </li>
                <li>
                  Run tests with <code>npm test</code>.
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-4 h-4 text-black" /> <strong>Resources</strong>
              </div>
              <ul className="text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://jestjs.io/docs/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jest Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org/docs/testing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next.js Testing Docs
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <FileCode2 className="w-4 h-4 text-blue-600" />{' '}
            <Badge variant="outline">Example Test File</Badge>
          </div>
          <p className="mb-2">
            Here&apos;s a simple example of a React component test using Testing Library and Jest:
          </p>
          <CodeBlock
            language="tsx"
            code={`import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /welcome to synkronex/i,
    });
    expect(heading).toBeInTheDocument();
  });
});`}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Place your test files in a <code>__tests__</code> folder or name them{' '}
            <code>*.test.tsx</code>.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center gap-2 mb-2">
              <BarChart className="w-4 h-4 text-purple-600" />{' '}
              <Badge variant="secondary">Coverage Reports</Badge>
            </div>
            <p>
              To generate a code coverage report, run <code>npm test -- --coverage</code>. Jest will
              output a summary and an HTML report in the <code>coverage</code> directory.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />{' '}
              <Badge variant="secondary">Running Tests in CI</Badge>
            </div>
            <p>
              Most CI providers (like GitHub Actions, GitLab CI, etc.) can run <code>npm test</code>{' '}
              as part of your build pipeline. Make sure your CI environment installs dependencies
              and runs tests to catch issues early.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
