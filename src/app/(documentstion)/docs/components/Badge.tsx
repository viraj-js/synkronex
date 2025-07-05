import React from 'react';

export interface BadgeProps {
  label: string;
  status?: 'success' | 'error' | 'warning' | 'info';
  removable?: boolean;
  onRemove?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({ label, status = 'info', removable, onRemove }) => (
  <span className={`badge badge-${status}`}>
    {label}
    {removable && <button className="badge-remove" onClick={onRemove}>×</button>}
  </span>
);
