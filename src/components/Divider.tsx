import * as React from 'react';

export const Divider: React.FC<{ vertical?: boolean }> = ({ vertical }) => (
  <div className={`divider${vertical ? ' divider-vertical' : ''}`}></div>
);
