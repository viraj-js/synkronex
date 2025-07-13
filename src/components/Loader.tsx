import * as React from 'react';

export const Loader: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => <div className={`loader loader-${size}`}></div>;
