import React from 'react';
import Image from 'next/image';

export interface CardProps {
  image?: string;
  alt?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ image, alt, actions, children }) => (
  <div className="card">
    {image && typeof image === 'string' ? (
      <Image src={image} alt={alt || 'Card image'} width={400} height={200} className="card-img rounded-t" />
    ) : null}
    <div className="card-content">{children}</div>
    {actions && <div className="card-actions">{actions}</div>}
  </div>
);
