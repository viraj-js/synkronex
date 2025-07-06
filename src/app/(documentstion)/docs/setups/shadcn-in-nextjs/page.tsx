'use client';

import { setupsGuides } from '../../content/en/setups';
import React from 'react';
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
  return typeof detail === 'object' && detail !== null && 'type' in detail && detail.type === 'link';
}

export default function ShadcnInNextjsPage() {
  const guide = (setupsGuides as Guide[]).find(g => g.slug === 'shadcn-in-nextjs');
  if (!guide) return <div>Guide not found.</div>;

  return (
    <div className="prose max-w-3xl mx-auto py-8">
      <h1>{guide.title}</h1>
      <ol>
        {guide.steps.map((step, i) => (
          <li className="mb-4" key={i}>
            <strong>{step.title}</strong>
            {step.code && (
              <CodeBlock code={step.code} language="bash" />
            )}
            {step.details && step.details.length > 0 && (
              <ul>
                {step.details.map((detail, j) => (
                  typeof detail === 'string' ? (
                    <li key={j}>{detail}</li>
                  ) : isStepDetailLink(detail) ? (
                    <li key={j}>
                      <a href={detail.href} target="_blank" rel="noopener noreferrer">{detail.label}</a>
                    </li>
                  ) : null
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}