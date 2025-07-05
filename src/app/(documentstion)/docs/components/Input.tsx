import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'text' | 'password' | 'email' | 'search';
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  variant = 'text',
  error,
  icon,
  ...props
}) => (
  <div className={`input-wrapper${error ? ' input-error' : ''}`}>
    {icon && <span className="input-icon">{icon}</span>}
    <input type={variant} {...props} />
    {error && <span className="input-error-message">{error}</span>}
  </div>
);
