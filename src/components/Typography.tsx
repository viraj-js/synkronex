import * as React from 'react';

export interface TypographyProps {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  as = 'span',
  variant = 'body',
  children,
}) => {
  const Tag = as;
  return <Tag className={`typography typography-${variant}`}>{children}</Tag>;
};
