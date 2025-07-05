import React from 'react';

export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', children }) => (
  <div className={`alert alert-${type}`}>{children}</div>
);
