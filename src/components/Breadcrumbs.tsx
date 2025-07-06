import React from 'react';

export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <nav className="breadcrumbs">
    {items.map((item, idx) => (
      <span key={item.label}>
        {item.href ? <a href={item.href}>{item.label}</a> : item.label}
        {idx < items.length - 1 && ' / '}
      </span>
    ))}
  </nav>
);
