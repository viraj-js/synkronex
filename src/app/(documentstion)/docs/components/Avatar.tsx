import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  badge?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, badge }) => (
  <div className="avatar">
    {src && typeof src === 'string' ? (
      <Image src={src} alt={alt || 'Avatar'} width={40} height={40} className="avatar-img rounded-full" />
    ) : (
      <span>{initials}</span>
    )}
    {badge && <span className="avatar-badge">{badge}</span>}
  </div>
);
