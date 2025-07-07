'use client';

import { setupsGuides } from '../../content/en/setups';
import * as React from 'react';
import CodeBlock from '@/components/client/CodeBlock';

// TypeScript types for guide and step
interface StepDetailLink {
  type: 'link';
  label: string;
  href: string;
}

interface Step {
  title: string;
  code: string | null;
  details: (string | StepDetailLink)[];
}

interface Guide {
  slug: string;
  title: string;
  steps: Step[];
}

function isStepDetailLink(detail: string | StepDetailLink): detail is StepDetailLink {
  return (
    typeof detail === 'object' && detail !== null && 'type' in detail && detail.type === 'link'
  );
}

export default function ShadcnInNextjsPage() {
  const guide = (setupsGuides as Guide[]).find((g) => g.slug === 'shadcn-in-nextjs');
  if (!guide) return <div>Guide not found.</div>;

  return (
    <div className="prose max-w-3xl mx-auto py-8">
      <h1>{guide.title}</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is shadcn/ui and why use it?</h2>
        <p className="text-muted-foreground mb-2">
          <strong>shadcn/ui</strong> is a collection of beautifully designed, accessible, and
          customizable React components built with Tailwind CSS. It enables you to rapidly build
          modern UIs for your Next.js app with best practices for accessibility and styling.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>Provides ready-to-use, themeable components</li>
          <li>Fully compatible with Tailwind CSS and Next.js</li>
          <li>Easy to customize and extend for your design system</li>
          <li>Accessible out-of-the-box</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What does each setup step do?</h2>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Install shadcn/ui CLI and dependencies:</strong> Sets up the CLI tool and
            required packages to generate and manage UI components.
          </li>
          <li>
            <strong>Initialize shadcn/ui:</strong> Configures your project for shadcn/ui usage,
            including Tailwind CSS integration and component directory setup.
          </li>
          <li>
            <strong>Add components:</strong> Use the CLI to add components (e.g., Button, Card) to
            your project, ready for customization.
          </li>
          <li>
            <strong>Customize and use:</strong> Edit the generated components as needed and use them
            in your Next.js pages and apps.
          </li>
        </ul>
      </div>
      <ol>
        {guide.steps.map((step, i) => (
          <li className="mb-4" key={i}>
            <strong>{step.title}</strong>
            {step.code && <CodeBlock code={step.code} language="bash" />}
            {step.details && step.details.length > 0 && (
              <ul>
                {step.details.map((detail, j) =>
                  typeof detail === 'string' ? (
                    <li key={j}>{detail}</li>
                  ) : isStepDetailLink(detail) ? (
                    <li key={j}>
                      <a href={detail.href} target="_blank" rel="noopener noreferrer">
                        {detail.label}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
